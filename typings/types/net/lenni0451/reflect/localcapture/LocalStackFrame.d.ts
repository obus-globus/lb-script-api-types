import type { Class } from '../../../../java/lang/Class.d.ts'
import type { StackTraceElement } from '../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface LocalStackFrame extends Object{
    getByteCodeIndex(): number;
    getClassName(): string;
    getDeclaringClass(): Class<Object>;
    getFileName(): string;
    getLineNumber(): number;
    getLocals(): Object[];
    getMethodName(): string;
    getMode(): number;
    getMonitors(): Object[];
    getStack(): Object[];
    isNativeMethod(): boolean;
    toStackTraceElement(): StackTraceElement;
}