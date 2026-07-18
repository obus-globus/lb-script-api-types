import type { LockFreeLinkedListNode } from '../../../../io/ktor/util/internal/LockFreeLinkedListNode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LockFreeLinkedListKt extends Object {
    static FAILURE: number;
    static SUCCESS: number;
    static UNDECIDED: number;
    static getALREADY_REMOVED(): Object;
    static getCONDITION_FALSE(): Object;
    static getLIST_EMPTY(): Object;
    static unwrap(self: Object): LockFreeLinkedListNode;
}