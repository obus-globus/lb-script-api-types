import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class StackTraceElementMixIn extends Object {
    constructor(classLoaderName: string, moduleName: string, moduleVersion: string, declaringClass: string, methodName: string, fileName: string, lineNumber: number)
    getClassLoaderName(): string;
    getClassName(): string;
    getFileName(): string;
    getLineNumber(): number;
    getMethodName(): string;
    getModuleName(): string;
    getModuleVersion(): string;
}