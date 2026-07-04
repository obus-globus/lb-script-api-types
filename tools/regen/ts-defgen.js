/*
 * This file is part of LiquidBounce (https://github.com/CCBlueX/LiquidBounce)
 *
 * Copyright (c) 2015 - 2025 CCBlueX
 *
 * LiquidBounce is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * LiquidBounce is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with LiquidBounce. If not, see <https://www.gnu.org/licenses/>.
 */

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const URLClassLoader_1 = require("@ccbluex/liquidbounce-script-api/java/net/URLClassLoader");
const File_1 = require("@ccbluex/liquidbounce-script-api/java/io/File");
const Thread_1 = require("@ccbluex/liquidbounce-script-api/java/lang/Thread");
const Paths_1 = require("@ccbluex/liquidbounce-script-api/java/nio/file/Paths");
// @ts-expect-error
const HashMap_1 = require("@ccbluex/liquidbounce-script-api/java/util/HashMap");
// @ts-expect-error
const ArrayList_1 = require("@ccbluex/liquidbounce-script-api/java/util/ArrayList");
const JvmClassMappingKt_1 = require("@ccbluex/liquidbounce-script-api/kotlin/jvm/JvmClassMappingKt");
const Class_1 = require("@ccbluex/liquidbounce-script-api/java/lang/Class");
const EventKt_1 = require("@ccbluex/liquidbounce-script-api/net/ccbluex/liquidbounce/event/EventKt");
const ClassPath_1 = require("@ccbluex/liquidbounce-script-api/com/google/common/reflect/ClassPath");
const ScriptManager_1 = require("@ccbluex/liquidbounce-script-api/net/ccbluex/liquidbounce/script/ScriptManager");
const LiquidBounce_1 = require("@ccbluex/liquidbounce-script-api/net/ccbluex/liquidbounce/LiquidBounce");
const LocalDate_1 = require("@ccbluex/liquidbounce-script-api/java/time/LocalDate");
const DateTimeFormatter_1 = require("@ccbluex/liquidbounce-script-api/java/time/format/DateTimeFormatter");
const inDev = LiquidBounce_1.LiquidBounce.IN_DEVELOPMENT;
// @ts-expect-error
const globalEntries = Object.entries(globalThis);
// T-1: Detect classes that implement a SAM (single-abstract-method) functional
// interface like java.util.function.Function so we can emit them as callable
// types in ambient.d.ts (otherwise they'd be uncallable class-instance types).
// Returns the SAM method name (e.g. "apply") or null when the class is not a SAM.
function detectSamMethod(clazz) {
    try {
        if (!clazz || typeof clazz.getInterfaces !== "function") return null;
        // Known SAM interfaces with single abstract method "apply"
        const samInterfaces = {
            "java.util.function.Function": "apply",
            "kotlin.jvm.functions.Function1": "invoke",
            "kotlin.jvm.functions.Function0": "invoke",
            "kotlin.jvm.functions.Function2": "invoke",
        };
        const seen = new Set();
        function walk(c) {
            if (!c || seen.has(c.getName())) return null;
            seen.add(c.getName());
            const ifaces = c.getInterfaces();
            for (let i = 0; i < ifaces.length; i++) {
                const n = ifaces[i].getName();
                if (samInterfaces[n]) return samInterfaces[n];
                const inherited = walk(ifaces[i]);
                if (inherited) return inherited;
            }
            const sc = c.getSuperclass && c.getSuperclass();
            if (sc) return walk(sc);
            return null;
        }
        return walk(clazz);
    } catch (e) {
        return null;
    }
}
// Function to create a URLClassLoader from a JAR path
function createClassLoaderFromJar(jarPath) {
    try {
        // Create File object for the JAR
        const jarFile = new File_1.File(jarPath);
        // Convert File to URL
        const jarUrl = jarFile.toURI().toURL();
        // Create URLClassLoader with the system class loader as parent
        return new URLClassLoader_1.URLClassLoader([jarUrl], Thread_1.Thread.currentThread().getContextClassLoader());
    }
    catch (e) {
        console.error("Error creating ClassLoader:", e);
        throw e;
    }
}
// Function to load a class from a given ClassLoader
function loadClassFromJar(classLoader, className) {
    try {
        return classLoader.loadClass(className);
    }
    catch (e) {
        console.error(`Error loading class ${className}:`, e);
        throw e;
    }
}
// @ts-expect-error
function findAllClassInfos() {
    // Enumerate every top-level class on the script context classloader. This is
    // the stock upstream approach. `Thread.getContextClassLoader()` is a JDK
    // @CallerSensitive method that used to throw under Java 25's GraalVM host
    // interop, which is why we previously routed around it via a Fabric-mod
    // ScriptHelper static; LiquidBounce b759cac57 (PR #8437) fixed that at the
    // Truffle layer, so the direct call works again - and because the generator
    // classes are now loaded via a child URLClassLoader (see generate()), they
    // are NOT on this classloader and so no longer leak into the output as
    // types/me/commandblock2 / types/me/ntrrgc.
    return Java.from(ClassPath_1.ClassPath.from(Thread_1.Thread.currentThread()
        .getContextClassLoader())
        .getTopLevelClasses()
        // @ts-expect-error
        .asList());
}
function getName(javaClass) {
    const fullName = javaClass.name;
    return fullName.substring(fullName.lastIndexOf(".") + 1);
}
const j2kSafe = it => {
    try {
        return JvmClassMappingKt_1.JvmClassMappingKt.getKotlinClass(it);
    } catch (_) {
        return undefined;
    }
}

const script = registerScript.apply({
    name: "ts-defgen",
    version: "1.0.0",
    authors: ["commandblock2", "CCBlueX"],
});
function generate(path, packageName) {
    try {
        // Load the ts-generator classes from the shadow jar staged at
        // <scripts>/ts-generator.jar via a child URLClassLoader (stock upstream
        // mechanism). This used to fail under Java 25 with
        // `IllegalAccessException: Attempt to lookup caller-sensitive method
        // using restricted lookup object`; LiquidBounce b759cac57 (PR #8437)
        // fixed it at the Truffle layer, so the URLClassLoader ctor works again
        // and we no longer need the Fabric-mod wrapper / ReflectionUtil.classByName.
        const loader = createClassLoaderFromJar(path + "/ts-generator.jar");
        const NPMGen = loadClassFromJar(loader, "me.commandblock2.tsGenerator.NPMPackageGenerator");
        const TsGen = loadClassFromJar(loader, "me.ntrrgc.tsGenerator.TypeScriptGenerator");
        const VoidType = loadClassFromJar(loader, "me.ntrrgc.tsGenerator.VoidType");
        const NULL = VoidType.getEnumConstants()[0];
        const javaClasses = [...new Map(globalEntries
            .filter((entry) => entry[1] != undefined)
            .map((entry) => (entry[1] instanceof Class_1.Class ? entry[1] : entry[1].class))
            .filter((entry) => entry != undefined)
            .map((clazz) => [clazz.name, clazz])).values()]; // dedupe: a class bound under >1 alias must import once (F1)
        // entry = [eventName, KClass, java.lang.Class]. Keep the Java Class: its
        // .name is the JVM binary name (TitleEvent$Clear), which is what both the
        // emitted .d.ts file name and its exported class name use. Kotlin
        // qualifiedName turns nested classes into dotted paths (TitleEvent.Clear),
        // which used to emit imports pointing at nonexistent TitleEvent/Clear.d.ts.
        const eventEntries = ReflectionUtil.getDeclaredField(EventKt_1.EventKt, "EVENT_NAME_TO_CLASS").entrySet().toArray()
            .map(entry => [entry[0], j2kSafe(entry[1]), entry[1]])
            .filter(entry => entry[1]);
        // The exported TS name for an event class: binary simple name ($-joined).
        const eventTsName = (entry) => {
            const binaryName = entry[2].name;
            return binaryName.substring(binaryName.lastIndexOf(".") + 1);
        };
        Client.displayChatMessage(`found ${eventEntries.length} events`);
        Client.displayChatMessage("looking for all jvm classes");
        const allClassInfos = findAllClassInfos();
        Client.displayChatMessage(`found ${allClassInfos.length} classes, converting to kotlin classes`);
        const classNames = ["java.net.URLClassLoader",
            "java.nio.file.Paths",
            "java.util.HashMap",
            "java.util.ArrayList",
            "java.util.jar.JarInputStream",
            "java.util.Map",
            "com.google.common.reflect.ClassPath",
            "kotlin.jvm.JvmClassMappingKt"
        ]
            .concat(allClassInfos.map((entry) => {
                try {
                    return entry.getName();
                }
                catch (e) {
                    return null;
                }
            }));
        const jvmClasses = classNames
            .map((entry) => {
                try {
                    return ReflectionUtil.classByName(entry);
                }
                catch (e) {
                    return null;
                }
            })
            .filter(it => it);
        const jvmClassesInKotlin = jvmClasses
            .map(it => j2kSafe(it))
            .filter(it => it);
        Client.displayChatMessage(`converted to ${jvmClassesInKotlin.length} kotlin classes`);
        const kotlinClasses = javaClasses
            .concat([
                // Using the imported class from @embedded
                ReflectionUtil.classByName("net.ccbluex.liquidbounce.script.bindings.features.ScriptModule")
            ])
            .map(it => j2kSafe(it))
            .concat(eventEntries.map(it => it[1]))
            .filter(it => it)
            .concat(jvmClassesInKotlin);
        const classes = new ArrayList_1.ArrayList(kotlinClasses);
        Client.displayChatMessage(`generating types for ${classes.length} classes`);
        Client.displayChatMessage("this may take a while, please wait...");

        // Load the KDoc manifest staged next to this script by regen-types.sh.
        // If it's absent (e.g. a CCBlueX upstream run that doesn't ship the
        // manifest), gracefully no-op so the generator behaves exactly as before.
        let kdocSource = null;
        try {
            // KDocSource lives in our ts-generator shadow jar, so resolve it via
            // the same child URLClassLoader as the generator classes above (it is
            // not on the Knot classloader now that the mod wrapper is gone).
            const KdocSourceCls = loadClassFromJar(loader, "me.ntrrgc.tsGenerator.KDocSource");
            const manifestPath = Paths_1.Paths.get("LiquidBounce", "scripts", "manifest.json");
            const Files = Java.type("java.nio.file.Files");
            if (Files.exists(manifestPath)) {
                const json = Files.readString(manifestPath);
                // Invoke the static factory KDocSource.fromJson(String) via reflection.
                const fromJsonMethod = KdocSourceCls.getDeclaredMethod("fromJson", Java.type("java.lang.String").class);
                kdocSource = fromJsonMethod.invoke(null, json);
                Client.displayChatMessage("loaded kdoc manifest with " + kdocSource.size() + " entries");
            } else {
                Client.displayChatMessage("kdoc manifest absent at " + manifestPath + " - emitting without inline TSDoc");
            }
        } catch (e) {
            Client.displayChatMessage("kdoc manifest load failed: " + e + " - continuing without inline TSDoc");
            kdocSource = null;
        }

        // @ts-expect-error
        const generated = new TsGen(classes, new HashMap_1.HashMap(), new ArrayList_1.ArrayList(), new ArrayList_1.ArrayList(), "number", NULL, kdocSource);
        const today = LocalDate_1.LocalDate.now();
        const formatter = DateTimeFormatter_1.DateTimeFormatter.ofPattern('y.M.d');
        Client.displayChatMessage("writing types");
        // @ts-expect-error
        const npmPack = new NPMGen(generated, packageName, `${inDev ? today.format(formatter) : LiquidBounce_1.LiquidBounce.INSTANCE.clientVersion}+${LiquidBounce_1.LiquidBounce.INSTANCE.clientBranch}.${LiquidBounce_1.LiquidBounce.INSTANCE.clientCommit}`,
            // extraFiles - add the ambient and augmentations files
            `"augmentations/**/*.d.ts", "ambient/ambient.d.ts"`,
            // extraTypesVersion - add the augmentations and ambient paths
            `"./augmentations/*", "ambient/ambient.d.ts"`,
            // otherExtras - add the types field
            `"types": "ambient/ambient.d.ts"`, null);
        npmPack.writePackageTo(
            // @ts-expect-error
            Paths_1.Paths.get(path));
        Client.displayChatMessage("print embedded script types, see log for more info, those are for maintainace use");
        const embeddedDefinition = `
// ambient.ts
// imports
import "../augmentations/index.d.ts"
${javaClasses
            .map((clazz) => {
                return `import { ${getName(clazz)} as ${getName(clazz)}_ } from "../types/${clazz.name.replaceAll(".", "/")}";`;
            })
            .join("\n")}
declare global {


// exports
${globalEntries
            .filter((entry) => entry[1] != undefined)
            .filter((entry) => !(entry[1] instanceof Class_1.Class))
            .filter((entry) => entry[1].class != undefined)
            .map((entry) => {
                const clazz = entry[1].class;
                const samMethod = detectSamMethod(clazz);
                if (samMethod) {
                    // T-1: emit a callable by plucking the SAM method's type
                    // via indexed access (e.g. RegisterScript_['apply']).
                    return `    export const ${entry[0]}: ${getName(clazz)}_[${JSON.stringify(samMethod)}];`;
                }
                return `    export const ${entry[0]}: ${getName(clazz)}_;`;
            })
            .join("\n\n")}

${globalEntries
            .filter(([name, value]) => value instanceof Class_1.Class)
            .map(([name, value]) => {
                var _b;
                // Iterate global ENTRIES (name-authoritative), so a class bound
                // under several aliases (e.g. "InteractionHand" AND "Hand") emits
                // one export const per alias instead of the first alias twice (F1/F6).
                const isInterface = ((_b = value.isInterface) === null || _b === void 0 ? void 0 : _b.call(value)) || false;
                if (isInterface) {
                    return `    export const ${name}: ${getName(value)}_;`;
                }
                return `    export const ${name}: typeof ${getName(value)}_;`;
            })
            .join("\n\n")}

}
`;
        const importsForScriptEventPatch = `
// imports for
${eventEntries.map((entry) => `import type { ${eventTsName(entry)} } from '../types/${entry[2].name.replaceAll(".", "/")}.d.ts'`).join("\n")}


`;
        const onEventsForScriptPatch = `
// on events
${eventEntries.map((entry) => `on(eventName: "${entry[0]}", handler: (${entry[0]}Event: ${eventTsName(entry)}) => void): void;`).join("\n")}


`;
        Client.displayChatMessage("Generated TypeScript definitions successfully!");
        Client.displayChatMessage(`Output path: ${path}`);
        // Output the generated content to console for debugging
        console.log(embeddedDefinition);
        // @ts-expect-error
        const Files = Java.type('java.nio.file.Files');
        // @ts-expect-error
        const filePath = Paths_1.Paths.get(`${path}/${packageName}/ambient/ambient.d.ts`);
        // @ts-expect-error
        Files.createDirectories(filePath.getParent());
        Files.writeString(filePath, embeddedDefinition,
            // @ts-expect-error
            Java.type("java.nio.charset.StandardCharsets").UTF_8);
        // Runtime-bindings sidecar: dump every real script-context binding
        // (name, backing Java class, member names) so post-patch can verify
        // ambient.d.ts against RUNTIME truth (check-ambient-contract.py) -
        // an ambient export with no runtime binding is a typing that
        // ReferenceErrors in real scripts (the F4/SilentHotbar bug class).
        try {
            const Modifier = Java.type("java.lang.reflect.Modifier");
            const bindingsDump = {};
            for (const entry of globalEntries) {
                const name = entry[0], value = entry[1];
                if (value === undefined || value === null) continue;
                try {
                    const isClassHandle = value instanceof Class_1.Class;
                    const javaClass = isClassHandle ? value : (value.class ?? null);
                    if (!javaClass) continue; // script-local JS junk, not a host binding
                    const statics = [], instanceMembers = [];
                    try {
                        for (const m of Java.from(javaClass.getMethods())) {
                            (Modifier.isStatic(m.getModifiers()) ? statics : instanceMembers).push(m.getName());
                        }
                        for (const f of Java.from(javaClass.getFields())) {
                            (Modifier.isStatic(f.getModifiers()) ? statics : instanceMembers).push(f.getName());
                        }
                    } catch (e) { /* keep the binding entry even if members fail */ }
                    bindingsDump[name] = {
                        javaClass: javaClass.getName(),
                        kind: isClassHandle ? "class-handle" : "instance",
                        statics: [...new Set(statics)].sort(),
                        members: [...new Set(instanceMembers)].sort(),
                    };
                } catch (e) { /* skip unreadable binding */ }
            }
            const bindingsPath = Paths_1.Paths.get(`${path}/${packageName}/ambient/runtime-bindings.json`);
            Files.writeString(bindingsPath, JSON.stringify(bindingsDump, null, 2) + "\n",
                // @ts-expect-error
                Java.type("java.nio.charset.StandardCharsets").UTF_8);
            Client.displayChatMessage(`wrote runtime-bindings.json (${Object.keys(bindingsDump).length} bindings)`);
        } catch (e) {
            Client.displayChatMessage("WARN: runtime-bindings dump failed: " + e);
        }

        // Write the ScriptModule augmentation file
        const augmentationContent = `// ScriptModule augmentation - adds event handler interfaces

// Event type imports
${importsForScriptEventPatch}

// Augment ScriptModule with specific event handler overloads
declare module '../types/net/ccbluex/liquidbounce/script/bindings/features/ScriptModule' {
    interface ScriptModule {
        on(eventName: "enable" | "disable", handler: () => void): void;

        // on events with specific event types
        ${onEventsForScriptPatch}
    }
}
`;
        // @ts-expect-error
        const augmentationFilePath = Paths_1.Paths.get(`${path}/${packageName}/augmentations/ScriptModule.augmentation.d.ts`);
        // @ts-expect-error
        Files.createDirectories(augmentationFilePath.getParent());
        Files.writeString(augmentationFilePath, augmentationContent,
            // @ts-expect-error
            Java.type("java.nio.charset.StandardCharsets").UTF_8);
        // @ts-expect-error
        const augmentationIndexPath = Paths_1.Paths.get(`${path}/${packageName}/augmentations/index.d.ts`);
        Files.writeString(augmentationIndexPath, `export * from './ScriptModule.augmentation';\n`,
            // @ts-expect-error
            Java.type("java.nio.charset.StandardCharsets").UTF_8);
        console.log(importsForScriptEventPatch);
        console.log(onEventsForScriptPatch);
    }
    catch (e) {
        console.error(e);
        Client.displayChatMessage(`Error generating TypeScript definitions: ${e.message}`);
        throw e;
    }
}
const packageName = "@ccbluex/liquidbounce-script-api";
const path = ScriptManager_1.ScriptManager.INSTANCE.root.path;
// @ts-expect-error
if (Java.type("java.lang.System").getenv("SCRIPT_TYPEGEN_BUILD")) {
    generate(path, packageName);
    // generate() writes + flushes every .d.ts synchronously before returning, so
    // the output is complete here. We deliberately do NOT call mc.close(): on
    // MC 26.2 it no longer terminates the JVM (the client then idles until the
    // regen timeout - ~100 min wasted), and it can itself block. Flush stdout and
    // HARD-exit via Runtime.halt (skips shutdown hooks that could re-hang) so the
    // run finishes the moment introspection completes (~15-20 min, not ~2 h).
    try { Java.type("java.lang.System").out.flush(); } catch (e) { /* ignore */ }
    Java.type("java.lang.Runtime").getRuntime().halt(0);
}
script.registerCommand({
    name: "ts-defgen",
    aliases: ["tsgen"],
    parameters: [],
    onExecute() {
        // @ts-expect-error
        UnsafeThread.run(() => generate(path, packageName));
    }
});
