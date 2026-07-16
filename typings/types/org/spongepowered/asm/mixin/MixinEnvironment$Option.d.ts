import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { MixinEnvironment$Option$Inherit } from '../../../../org/spongepowered/asm/mixin/MixinEnvironment$Option$Inherit.d.ts'
export class MixinEnvironment$Option extends Enum<MixinEnvironment$Option> {
    static CHECK_ALL: MixinEnvironment$Option;
    static CHECK_IMPLEMENTS: MixinEnvironment$Option;
    static CHECK_IMPLEMENTS_STRICT: MixinEnvironment$Option;
    static CLASSREADER_EXPAND_FRAMES: MixinEnvironment$Option;
    static DEBUG_ALL: MixinEnvironment$Option;
    static DEBUG_EXPORT: MixinEnvironment$Option;
    static DEBUG_EXPORT_DECOMPILE: MixinEnvironment$Option;
    static DEBUG_EXPORT_DECOMPILE_MERGESIGNATURES: MixinEnvironment$Option;
    static DEBUG_EXPORT_DECOMPILE_THREADED: MixinEnvironment$Option;
    static DEBUG_EXPORT_FILTER: MixinEnvironment$Option;
    static DEBUG_INJECTORS: MixinEnvironment$Option;
    static DEBUG_PROFILER: MixinEnvironment$Option;
    static DEBUG_STRICT: MixinEnvironment$Option;
    static DEBUG_TARGETS: MixinEnvironment$Option;
    static DEBUG_UNIQUE: MixinEnvironment$Option;
    static DEBUG_VERBOSE: MixinEnvironment$Option;
    static DEBUG_VERIFY: MixinEnvironment$Option;
    static DEFAULT_COMPATIBILITY_LEVEL: MixinEnvironment$Option;
    static DISABLE_REFMAP: MixinEnvironment$Option;
    static DUMP_TARGET_ON_FAILURE: MixinEnvironment$Option;
    static ENVIRONMENT: MixinEnvironment$Option;
    static HOT_SWAP: MixinEnvironment$Option;
    static IGNORE_CONSTRAINTS: MixinEnvironment$Option;
    static IGNORE_REQUIRED: MixinEnvironment$Option;
    static INITIALISER_INJECTION_MODE: MixinEnvironment$Option;
    static OBFUSCATION_TYPE: MixinEnvironment$Option;
    static REFMAP_REMAP: MixinEnvironment$Option;
    static REFMAP_REMAP_ALLOW_PERMISSIVE: MixinEnvironment$Option;
    static REFMAP_REMAP_RESOURCE: MixinEnvironment$Option;
    static REFMAP_REMAP_SOURCE_ENV: MixinEnvironment$Option;
    static SHIFT_BY_VIOLATION_BEHAVIOUR: MixinEnvironment$Option;
    static TUNABLE: MixinEnvironment$Option;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MixinEnvironment$Option;
    static values(): MixinEnvironment$Option[];
    private constructor(arg2: string)
    private constructor(arg2: string, arg3: string)
    private constructor(arg2: MixinEnvironment$Option, arg3: string)
    private constructor(arg2: MixinEnvironment$Option, arg3: string, arg4: boolean)
    private constructor(arg2: MixinEnvironment$Option, arg3: MixinEnvironment$Option$Inherit, arg4: boolean, arg5: string, arg6: boolean)
    private constructor(arg2: MixinEnvironment$Option, arg3: MixinEnvironment$Option$Inherit, arg4: boolean, arg5: string, arg6: boolean, arg7: string)
    private constructor(arg2: MixinEnvironment$Option, arg3: MixinEnvironment$Option$Inherit, arg4: string)
    private constructor(arg2: MixinEnvironment$Option, arg3: MixinEnvironment$Option$Inherit, arg4: string, arg5: boolean)
    private constructor(arg2: MixinEnvironment$Option, arg3: MixinEnvironment$Option$Inherit, arg4: string, arg5: boolean, arg6: string)
    private constructor(arg2: MixinEnvironment$Option, arg3: MixinEnvironment$Option$Inherit, arg4: string, arg5: string)
    private constructor(arg2: MixinEnvironment$Option$Inherit, arg3: boolean, arg4: string)
    // private defaultValue: string;
    // private depth: number;
    // private inheritance: MixinEnvironment$Option$Inherit;
    // private isFlag: boolean;
    // private isHidden: boolean;
    // private parent: MixinEnvironment$Option;
    // private property: string;
    getBooleanValue(): boolean;
    getEnumValue<E extends Enum<E>>(arg0: E): E;
    // private getInheritedBooleanValue(): boolean;
    // private getLocalBooleanValue(arg0: boolean): boolean;
    getStringValue(): string;
    toString(): string;
    name(): "DEBUG_ALL" | "DEBUG_EXPORT" | "DEBUG_EXPORT_FILTER" | "DEBUG_EXPORT_DECOMPILE" | "DEBUG_EXPORT_DECOMPILE_THREADED" | "DEBUG_EXPORT_DECOMPILE_MERGESIGNATURES" | "DEBUG_VERIFY" | "DEBUG_VERBOSE" | "DEBUG_INJECTORS" | "DEBUG_STRICT" | "DEBUG_UNIQUE" | "DEBUG_TARGETS" | "DEBUG_PROFILER" | "DUMP_TARGET_ON_FAILURE" | "CHECK_ALL" | "CHECK_IMPLEMENTS" | "CHECK_IMPLEMENTS_STRICT" | "IGNORE_CONSTRAINTS" | "HOT_SWAP" | "ENVIRONMENT" | "OBFUSCATION_TYPE" | "DISABLE_REFMAP" | "REFMAP_REMAP" | "REFMAP_REMAP_RESOURCE" | "REFMAP_REMAP_SOURCE_ENV" | "REFMAP_REMAP_ALLOW_PERMISSIVE" | "IGNORE_REQUIRED" | "DEFAULT_COMPATIBILITY_LEVEL" | "SHIFT_BY_VIOLATION_BEHAVIOUR" | "INITIALISER_INJECTION_MODE" | "TUNABLE" | "CLASSREADER_EXPAND_FRAMES";
}