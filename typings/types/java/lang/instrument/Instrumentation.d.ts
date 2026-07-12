import type { Class } from '../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../java/lang/ClassLoader.d.ts'
import type { Module } from '../../../java/lang/Module.d.ts'
import type { ClassDefinition } from '../../../java/lang/instrument/ClassDefinition.d.ts'
import type { ClassFileTransformer } from '../../../java/lang/instrument/ClassFileTransformer.d.ts'
import type { JarFile } from '../../../java/util/jar/JarFile.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Instrumentation extends Object{
    addTransformer(arg0: ClassFileTransformer): void;
    addTransformer(arg0: ClassFileTransformer, arg1: boolean): void;
    appendToBootstrapClassLoaderSearch(arg0: JarFile): void;
    appendToSystemClassLoaderSearch(arg0: JarFile): void;
    getAllLoadedClasses(): Class<Object>[];
    getInitiatedClasses(arg0: ClassLoader): Class<Object>[];
    getObjectSize(arg0: Object): number;
    isModifiableClass(arg0: Class<Object>): boolean;
    isModifiableModule(arg0: Module): boolean;
    isNativeMethodPrefixSupported(): boolean;
    isRedefineClassesSupported(): boolean;
    isRetransformClassesSupported(): boolean;
    redefineClasses(...arg0: ClassDefinition[]): void;
    redefineModule(arg0: Module, arg1: Module[], arg2: { [key: string]: Module[] }, arg3: { [key: string]: Module[] }, arg4: Class<Object>[], arg5: Map<Class<Object>, Class<Object>[]>): void;
    removeTransformer(arg0: ClassFileTransformer): boolean;
    retransformClasses(...arg0: Class<Object>[]): void;
    setNativeMethodPrefix(arg0: ClassFileTransformer, arg1: string): void;
}