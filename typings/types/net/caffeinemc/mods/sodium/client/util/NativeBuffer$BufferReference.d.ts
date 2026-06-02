import type { StackTraceElement } from '../../../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class NativeBuffer$BufferReference extends Object {
    private constructor(arg0: number, arg1: number, arg2: StackTraceElement[])
    address: number;
    allocationSite: StackTraceElement[];
    freed: boolean;
    length: number;
    // private checkFreed(): void;
}