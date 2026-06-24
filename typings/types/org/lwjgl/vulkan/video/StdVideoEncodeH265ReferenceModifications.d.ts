import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoEncodeH265ReferenceModificationFlags } from '../../../../org/lwjgl/vulkan/video/StdVideoEncodeH265ReferenceModificationFlags.d.ts'
export class StdVideoEncodeH265ReferenceModifications extends Struct<StdVideoEncodeH265ReferenceModifications> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static LIST_ENTRY_L0: number;
    static LIST_ENTRY_L1: number;
    static NUM_REF_IDX_L0_ACTIVE_MINUS1: number;
    static NUM_REF_IDX_L1_ACTIVE_MINUS1: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static REFPICLIST0: number;
    static REFPICLIST1: number;
    static RESERVED1: number;
    static SIZEOF: number;
    static calloc(): StdVideoEncodeH265ReferenceModifications;
    static calloc(paramarg0: MemoryStack): StdVideoEncodeH265ReferenceModifications;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoEncodeH265ReferenceModifications;
    static create(paramarg0: number): StdVideoEncodeH265ReferenceModifications;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoEncodeH265ReferenceModifications;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoEncodeH265ReferenceModifications;
    static malloc(paramarg0: MemoryStack): StdVideoEncodeH265ReferenceModifications;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nRefPicList0(paramarg0: number, paramarg1: number): number;
    static nRefPicList0(paramarg0: number): ByteBuffer;
    static nRefPicList0(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nRefPicList0(paramarg0: number, paramarg1: ByteBuffer): void;
    static nRefPicList1(paramarg0: number, paramarg1: number): number;
    static nRefPicList1(paramarg0: number): ByteBuffer;
    static nRefPicList1(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nRefPicList1(paramarg0: number, paramarg1: ByteBuffer): void;
    static nflags(paramarg0: number): StdVideoEncodeH265ReferenceModificationFlags;
    static nflags(paramarg0: number, paramarg1: StdVideoEncodeH265ReferenceModificationFlags): void;
    static nlist_entry_l0(paramarg0: number, paramarg1: number): number;
    static nlist_entry_l0(paramarg0: number): ByteBuffer;
    static nlist_entry_l0(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nlist_entry_l0(paramarg0: number, paramarg1: ByteBuffer): void;
    static nlist_entry_l1(paramarg0: number, paramarg1: number): number;
    static nlist_entry_l1(paramarg0: number): ByteBuffer;
    static nlist_entry_l1(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nlist_entry_l1(paramarg0: number, paramarg1: ByteBuffer): void;
    static nnum_ref_idx_l0_active_minus1(paramarg0: number): number;
    static nnum_ref_idx_l0_active_minus1(paramarg0: number, paramarg1: number): void;
    static nnum_ref_idx_l1_active_minus1(paramarg0: number): number;
    static nnum_ref_idx_l1_active_minus1(paramarg0: number, paramarg1: number): void;
    static nreserved1(paramarg0: number): number;
    static nreserved1(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    RefPicList0(): ByteBuffer;
    RefPicList0(arg0: ByteBuffer): StdVideoEncodeH265ReferenceModifications;
    RefPicList0(arg0: number): number;
    RefPicList0(arg0: number, arg1: number): StdVideoEncodeH265ReferenceModifications;
    RefPicList1(): ByteBuffer;
    RefPicList1(arg0: ByteBuffer): StdVideoEncodeH265ReferenceModifications;
    RefPicList1(arg0: number): number;
    RefPicList1(arg0: number, arg1: number): StdVideoEncodeH265ReferenceModifications;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoEncodeH265ReferenceModifications;
    flags(): StdVideoEncodeH265ReferenceModificationFlags;
    flags(arg0: (param0: StdVideoEncodeH265ReferenceModificationFlags) => void): StdVideoEncodeH265ReferenceModifications;
    flags(arg0: StdVideoEncodeH265ReferenceModificationFlags): StdVideoEncodeH265ReferenceModifications;
    list_entry_l0(): ByteBuffer;
    list_entry_l0(arg0: ByteBuffer): StdVideoEncodeH265ReferenceModifications;
    list_entry_l0(arg0: number): number;
    list_entry_l0(arg0: number, arg1: number): StdVideoEncodeH265ReferenceModifications;
    list_entry_l1(): ByteBuffer;
    list_entry_l1(arg0: ByteBuffer): StdVideoEncodeH265ReferenceModifications;
    list_entry_l1(arg0: number): number;
    list_entry_l1(arg0: number, arg1: number): StdVideoEncodeH265ReferenceModifications;
    num_ref_idx_l0_active_minus1(): number;
    num_ref_idx_l0_active_minus1(arg0: number): StdVideoEncodeH265ReferenceModifications;
    num_ref_idx_l1_active_minus1(): number;
    num_ref_idx_l1_active_minus1(arg0: number): StdVideoEncodeH265ReferenceModifications;
    reserved1(): number;
    reserved1(arg0: number): StdVideoEncodeH265ReferenceModifications;
    set(arg0: StdVideoEncodeH265ReferenceModificationFlags, arg1: number, arg2: number, arg3: number, arg4: ByteBuffer, arg5: ByteBuffer, arg6: ByteBuffer, arg7: ByteBuffer): StdVideoEncodeH265ReferenceModifications;
    set(arg0: StdVideoEncodeH265ReferenceModifications): StdVideoEncodeH265ReferenceModifications;
    sizeof(): number;
}