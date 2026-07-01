import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class StackTraceElement extends Object implements Serializable {
    constructor(arg0: string, arg1: string, arg2: string, arg3: number)
    constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: number)
    readonly classLoaderName: string;
    // private declaringClass: string;
    // private declaringClassObject: Class<Object>;
    readonly fileName: string;
    // private format: number;
    readonly lineNumber: number;
    readonly methodName: string;
    readonly moduleName: string;
    readonly moduleVersion: string;
    // private computeFormat(): void;
    // private dropClassLoaderName(): boolean;
    // private dropModuleVersion(): boolean;
    equals(arg0: Object | null): boolean;
    getClassLoaderName(): string;
    getClassName(): string;
    getFileName(): string;
    getLineNumber(): number;
    getMethodName(): string;
    getModuleName(): string;
    getModuleVersion(): string;
    hashCode(): number;
    isNativeMethod(): boolean;
    toString(): string;
}