import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { FT_ListNode } from '../../../../org/lwjgl/util/freetype/FT_ListNode.d.ts'
export class FT_List extends Struct<FT_List> {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static HEAD: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static TAIL: number;
    static create(paramarg0: number): FT_List;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_List;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static nhead(paramarg0: number): FT_ListNode;
    static ntail(paramarg0: number): FT_ListNode;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): FT_List;
    head(): FT_ListNode;
    sizeof(): number;
    tail(): FT_ListNode;
}