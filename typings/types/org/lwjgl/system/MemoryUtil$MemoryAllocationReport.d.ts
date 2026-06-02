import type { StackTraceElement } from '../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface MemoryUtil$MemoryAllocationReport extends Object{
    invoke(arg0: number, arg1: number, arg2: number, arg3: string, arg4: StackTraceElement[]): void;
}