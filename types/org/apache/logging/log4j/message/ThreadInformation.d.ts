import type { StackTraceElement } from '../../../../../java/lang/StackTraceElement.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ThreadInformation extends Object{
    printStack(sb: StringBuilder, trace: StackTraceElement[]): void;
    printThreadInfo(sb: StringBuilder): void;
}