import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../java/lang/ClassLoader.d.ts'
import type { ModuleLayer } from '../../java/lang/ModuleLayer.d.ts'
import type { ModuleDescriptor } from '../../java/lang/module/ModuleDescriptor.d.ts'
import type { AnnotatedElement } from '../../java/lang/reflect/AnnotatedElement.d.ts'
import type { URI } from '../../java/net/URI.d.ts'
import type { Annotation } from '../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Module extends Object implements AnnotatedElement {
    constructor(arg0: ClassLoader)
    constructor(arg0: ClassLoader, arg1: ModuleDescriptor)
    constructor(arg0: ModuleLayer, arg1: ClassLoader, arg2: ModuleDescriptor, arg3: URI)
    addExports(arg0: string, arg1: Module): Module;
    addOpens(arg0: string, arg1: Module): Module;
    addReads(arg0: Module): Module;
    addUses(arg0: Class<Object>): Module;
    // private allows(arg0: Module[], arg1: Module): boolean;
    canRead(arg0: Module): boolean;
    canUse(arg0: Class<Object>): boolean;
    ensureNativeAccess(arg0: Class<Object>, arg1: string, arg2: Class<Object>, arg3: boolean): void;
    getAnnotation<T extends Annotation>(arg0: Class<T>): T;
    getAnnotations(): Annotation[];
    getAnnotationsByType(arg0: Class<T>): T[];
    // private getCallerModule(arg0: Class<Object>): Module;
    getClassLoader(): ClassLoader;
    getDeclaredAnnotation<T extends Annotation>(arg0: Class<T>): T;
    getDeclaredAnnotations(): Annotation[];
    getDeclaredAnnotationsByType(arg0: Class<T>): T[];
    getDescriptor(): ModuleDescriptor;
    getLayer(): ModuleLayer;
    getName(): string;
    getPackages(): string[];
    getResourceAsStream(arg0: string): InputStream;
    implAddEnableNativeAccess(): Module;
    implAddExports(arg0: string): void;
    implAddExports(arg0: string, arg1: Module): void;
    implAddExportsNoSync(arg0: string): void;
    implAddExportsNoSync(arg0: string, arg1: Module): void;
    // private implAddExportsOrOpens(arg0: string, arg1: Module, arg2: boolean, arg3: boolean): void;
    implAddExportsToAllUnnamed(arg0: string): void;
    implAddOpens(arg0: string): void;
    implAddOpens(arg0: string, arg1: Module): void;
    implAddOpensToAllUnnamed(arg0: string): void;
    implAddReads(arg0: Module): void;
    // private implAddReads(arg0: Module, arg1: boolean): void;
    implAddReadsAllUnnamed(): void;
    implAddReadsNoSync(arg0: Module): void;
    implAddUses(arg0: Class<Object>): void;
    // private implIsExportedOrOpen(arg0: string, arg1: Module, arg2: boolean): boolean;
    isAnnotationPresent(arg0: Class<Annotation>): boolean;
    // private isExplicitlyExportedOrOpened(arg0: string, arg1: Module, arg2: boolean): boolean;
    isExported(arg0: string): boolean;
    isExported(arg0: string, arg1: Module): boolean;
    isNamed(): boolean;
    isNativeAccessEnabled(): boolean;
    isOpen(arg0: string): boolean;
    isOpen(arg0: string, arg1: Module): boolean;
    isReflectivelyExported(arg0: string, arg1: Module): boolean;
    // private isReflectivelyExportedOrOpened(arg0: string, arg1: Module, arg2: boolean): boolean;
    isReflectivelyOpened(arg0: string, arg1: Module): boolean;
    // private loadModuleInfoClass(): Class<Object>;
    // private loadModuleInfoClass(arg0: InputStream): Class<Object>;
    // private moduleForNativeAccess(): Module;
    // private moduleInfoClass(): Class<Object>;
    toString(): string;
}