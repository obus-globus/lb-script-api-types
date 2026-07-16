import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoEncodeH264ReferenceListsInfoFlags } from '../../../../org/lwjgl/vulkan/video/StdVideoEncodeH264ReferenceListsInfoFlags.d.ts'
export class StdVideoEncodeH264ReferenceListsInfo extends Struct<StdVideoEncodeH264ReferenceListsInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static NUM_REF_IDX_L0_ACTIVE_MINUS1: number;
    static NUM_REF_IDX_L1_ACTIVE_MINUS1: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PREFLIST0MODOPERATIONS: number;
    static PREFLIST1MODOPERATIONS: number;
    static PREFPICMARKINGOPERATIONS: number;
    static REFLIST0MODOPCOUNT: number;
    static REFLIST1MODOPCOUNT: number;
    static REFPICLIST0: number;
    static REFPICLIST1: number;
    static REFPICMARKINGOPCOUNT: number;
    static RESERVED1: number;
    static SIZEOF: number;
    static calloc(): StdVideoEncodeH264ReferenceListsInfo;
    static calloc(paramarg0: MemoryStack): StdVideoEncodeH264ReferenceListsInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoEncodeH264ReferenceListsInfo;
    static create(paramarg0: number): StdVideoEncodeH264ReferenceListsInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoEncodeH264ReferenceListsInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoEncodeH264ReferenceListsInfo;
    static malloc(paramarg0: MemoryStack): StdVideoEncodeH264ReferenceListsInfo;
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
    static nflags(paramarg0: number): StdVideoEncodeH264ReferenceListsInfoFlags;
    static nflags(paramarg0: number, paramarg1: StdVideoEncodeH264ReferenceListsInfoFlags): void;
    static nnum_ref_idx_l0_active_minus1(paramarg0: number): number;
    static nnum_ref_idx_l0_active_minus1(paramarg0: number, paramarg1: number): void;
    static nnum_ref_idx_l1_active_minus1(paramarg0: number): number;
    static nnum_ref_idx_l1_active_minus1(paramarg0: number, paramarg1: number): void;
    static npRefList0ModOperations(paramarg0: number): (Object | null)[];
    static npRefList0ModOperations(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npRefList1ModOperations(paramarg0: number): (Object | null)[];
    static npRefList1ModOperations(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npRefPicMarkingOperations(paramarg0: number): (Object | null)[];
    static npRefPicMarkingOperations(paramarg0: number, paramarg1: (Object | null)[]): void;
    static nrefList0ModOpCount(paramarg0: number): number;
    static nrefList0ModOpCount(paramarg0: number, paramarg1: number): void;
    static nrefList1ModOpCount(paramarg0: number): number;
    static nrefList1ModOpCount(paramarg0: number, paramarg1: number): void;
    static nrefPicMarkingOpCount(paramarg0: number): number;
    static nrefPicMarkingOpCount(paramarg0: number, paramarg1: number): void;
    static nreserved1(paramarg0: number, paramarg1: number): number;
    static nreserved1(paramarg0: number): ByteBuffer;
    static nreserved1(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nreserved1(paramarg0: number, paramarg1: ByteBuffer): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    RefPicList0(): ByteBuffer;
    RefPicList0(arg0: ByteBuffer): StdVideoEncodeH264ReferenceListsInfo;
    RefPicList0(arg0: number): number;
    RefPicList0(arg0: number, arg1: number): StdVideoEncodeH264ReferenceListsInfo;
    RefPicList1(): ByteBuffer;
    RefPicList1(arg0: ByteBuffer): StdVideoEncodeH264ReferenceListsInfo;
    RefPicList1(arg0: number): number;
    RefPicList1(arg0: number, arg1: number): StdVideoEncodeH264ReferenceListsInfo;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoEncodeH264ReferenceListsInfo;
    flags(): StdVideoEncodeH264ReferenceListsInfoFlags;
    flags(arg0: (param0: StdVideoEncodeH264ReferenceListsInfoFlags) => void): StdVideoEncodeH264ReferenceListsInfo;
    flags(arg0: StdVideoEncodeH264ReferenceListsInfoFlags): StdVideoEncodeH264ReferenceListsInfo;
    num_ref_idx_l0_active_minus1(): number;
    num_ref_idx_l0_active_minus1(arg0: number): StdVideoEncodeH264ReferenceListsInfo;
    num_ref_idx_l1_active_minus1(): number;
    num_ref_idx_l1_active_minus1(arg0: number): StdVideoEncodeH264ReferenceListsInfo;
    pRefList0ModOperations(): (Object | null)[];
    pRefList0ModOperations(arg0: (Object | null)[]): StdVideoEncodeH264ReferenceListsInfo;
    pRefList1ModOperations(): (Object | null)[];
    pRefList1ModOperations(arg0: (Object | null)[]): StdVideoEncodeH264ReferenceListsInfo;
    pRefPicMarkingOperations(): (Object | null)[];
    pRefPicMarkingOperations(arg0: (Object | null)[]): StdVideoEncodeH264ReferenceListsInfo;
    refList0ModOpCount(): number;
    refList0ModOpCount(arg0: number): StdVideoEncodeH264ReferenceListsInfo;
    refList1ModOpCount(): number;
    refList1ModOpCount(arg0: number): StdVideoEncodeH264ReferenceListsInfo;
    refPicMarkingOpCount(): number;
    set(arg0: StdVideoEncodeH264ReferenceListsInfo): StdVideoEncodeH264ReferenceListsInfo;
    set(arg0: StdVideoEncodeH264ReferenceListsInfoFlags, arg1: number, arg2: number, arg3: ByteBuffer, arg4: ByteBuffer, arg5: number, arg6: number, arg7: (Object | null)[], arg8: (Object | null)[], arg9: (Object | null)[]): StdVideoEncodeH264ReferenceListsInfo;
    sizeof(): number;
}