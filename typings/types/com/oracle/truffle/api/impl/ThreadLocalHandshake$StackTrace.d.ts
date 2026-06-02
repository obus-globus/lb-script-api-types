import type { StackTraceElement } from '../../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ThreadLocalHandshake$StackTrace extends Object {
    private constructor(elements: StackTraceElement[])
    // private elements: StackTraceElement[];
    equals(other: Object | null): boolean;
    hashCode(): number;
}