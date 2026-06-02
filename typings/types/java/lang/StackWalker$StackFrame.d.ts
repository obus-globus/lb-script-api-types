import type { Class } from '../../java/lang/Class.d.ts'
import type { StackTraceElement } from '../../java/lang/StackTraceElement.d.ts'
import type { MethodType } from '../../java/lang/invoke/MethodType.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface StackWalker$StackFrame extends Object{
    getByteCodeIndex(): number;
    getClassName(): string;
    getDeclaringClass(): Class<Object>;
    getDescriptor(): string;
    getFileName(): string;
    getLineNumber(): number;
    getMethodName(): string;
    getMethodType(): MethodType;
    isNativeMethod(): boolean;
    toStackTraceElement(): StackTraceElement;
}