import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { StackTraceElement } from '../../../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ExtendedClassInfo } from '../../../../../../org/apache/logging/log4j/core/impl/ExtendedClassInfo.d.ts'
export abstract class ExtendedStackTraceElementMixIn extends Object implements Serializable {
    constructor(classLoaderName: string, moduleName: string, moduleVersion: string, declaringClass: string, methodName: string, fileName: string, lineNumber: number, exact: boolean, location: string, version: string)
    getClassLoaderName(): string;
    getClassName(): string;
    getExact(): boolean;
    getExtraClassInfo(): ExtendedClassInfo;
    getFileName(): string;
    getLineNumber(): number;
    getLocation(): string;
    getMethodName(): string;
    getModuleName(): string;
    getModuleVersion(): string;
    getStackTraceElement(): StackTraceElement;
    getVersion(): string;
    isNativeMethod(): boolean;
}