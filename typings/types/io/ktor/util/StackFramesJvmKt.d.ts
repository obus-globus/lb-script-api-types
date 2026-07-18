import type { StackTraceElement } from '../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
export class StackFramesJvmKt extends Object {
    static createStackTraceElement(kClass: KClass<Object>, methodName: string, fileName: string, lineNumber: number): StackTraceElement;
}