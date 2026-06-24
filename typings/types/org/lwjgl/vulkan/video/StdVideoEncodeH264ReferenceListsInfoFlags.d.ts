import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class StdVideoEncodeH264ReferenceListsInfoFlags extends Struct<StdVideoEncodeH264ReferenceListsInfoFlags> implements NativeResource {
    static ALIGNOF: number;
    static BITFIELD0: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): StdVideoEncodeH264ReferenceListsInfoFlags;
    static calloc(paramarg0: MemoryStack): StdVideoEncodeH264ReferenceListsInfoFlags;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoEncodeH264ReferenceListsInfoFlags;
    static create(paramarg0: number): StdVideoEncodeH264ReferenceListsInfoFlags;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoEncodeH264ReferenceListsInfoFlags;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoEncodeH264ReferenceListsInfoFlags;
    static malloc(paramarg0: MemoryStack): StdVideoEncodeH264ReferenceListsInfoFlags;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbitfield0(paramarg0: number): number;
    static nbitfield0(paramarg0: number, paramarg1: number): void;
    static nref_pic_list_modification_l0_flag(paramarg0: number): number;
    static nref_pic_list_modification_l0_flag(paramarg0: number, paramarg1: number): void;
    static nref_pic_list_modification_l1_flag(paramarg0: number): number;
    static nref_pic_list_modification_l1_flag(paramarg0: number, paramarg1: number): void;
    static nreserved(paramarg0: number): number;
    static nreserved(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoEncodeH264ReferenceListsInfoFlags;
    ref_pic_list_modification_l0_flag(): boolean;
    ref_pic_list_modification_l0_flag(arg0: boolean): StdVideoEncodeH264ReferenceListsInfoFlags;
    ref_pic_list_modification_l1_flag(): boolean;
    ref_pic_list_modification_l1_flag(arg0: boolean): StdVideoEncodeH264ReferenceListsInfoFlags;
    set(arg0: boolean, arg1: boolean): StdVideoEncodeH264ReferenceListsInfoFlags;
    set(arg0: StdVideoEncodeH264ReferenceListsInfoFlags): StdVideoEncodeH264ReferenceListsInfoFlags;
    sizeof(): number;
}