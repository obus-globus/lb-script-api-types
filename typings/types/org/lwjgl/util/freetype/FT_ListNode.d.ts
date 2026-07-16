import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class FT_ListNode extends Struct<FT_ListNode> {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DATA: number;
    static NEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PREV: number;
    static SIZEOF: number;
    static create(paramarg0: number): FT_ListNode;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_ListNode;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static ndata(paramarg0: number, paramarg1: number): ByteBuffer;
    static nnext(paramarg0: number): FT_ListNode;
    static nprev(paramarg0: number): FT_ListNode;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): FT_ListNode;
    data(arg0: number): ByteBuffer;
    next(): FT_ListNode;
    prev(): FT_ListNode;
    sizeof(): number;
}