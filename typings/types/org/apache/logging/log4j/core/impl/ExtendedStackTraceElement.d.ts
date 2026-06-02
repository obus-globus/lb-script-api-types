import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { StackTraceElement } from '../../../../../../java/lang/StackTraceElement.d.ts'
import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ExtendedClassInfo } from '../../../../../../org/apache/logging/log4j/core/impl/ExtendedClassInfo.d.ts'
import type { TextRenderer } from '../../../../../../org/apache/logging/log4j/core/pattern/TextRenderer.d.ts'
export class ExtendedStackTraceElement extends Object implements Serializable {
    constructor(stackTraceElement: StackTraceElement, extraClassInfo: ExtendedClassInfo)
    constructor(classLoaderName: string, moduleName: string, moduleVersion: string, declaringClass: string, methodName: string, fileName: string, lineNumber: number, exact: boolean, location: string, version: string)
    readonly extraClassInfo: ExtendedClassInfo;
    readonly stackTraceElement: StackTraceElement;
    equals(obj: Object | null): boolean;
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
    hashCode(): number;
    isNativeMethod(): boolean;
    // private render(stElement: StackTraceElement, output: StringBuilder, textRenderer: TextRenderer): void;
    renderOn(output: StringBuilder, textRenderer: TextRenderer): void;
    toString(): string;
}