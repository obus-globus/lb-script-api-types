import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoDecodeH265ReferenceInfo } from '../../../org/lwjgl/vulkan/video/StdVideoDecodeH265ReferenceInfo.d.ts'
export class VkVideoDecodeH265DpbSlotInfoKHR extends Struct<VkVideoDecodeH265DpbSlotInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSTDREFERENCEINFO: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkVideoDecodeH265DpbSlotInfoKHR;
    static calloc(paramarg0: MemoryStack): VkVideoDecodeH265DpbSlotInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoDecodeH265DpbSlotInfoKHR;
    static create(paramarg0: number): VkVideoDecodeH265DpbSlotInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoDecodeH265DpbSlotInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoDecodeH265DpbSlotInfoKHR;
    static malloc(paramarg0: MemoryStack): VkVideoDecodeH265DpbSlotInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npStdReferenceInfo(paramarg0: number): StdVideoDecodeH265ReferenceInfo;
    static npStdReferenceInfo(paramarg0: number, paramarg1: StdVideoDecodeH265ReferenceInfo): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoDecodeH265DpbSlotInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkVideoDecodeH265DpbSlotInfoKHR;
    pStdReferenceInfo(): StdVideoDecodeH265ReferenceInfo;
    pStdReferenceInfo(arg0: StdVideoDecodeH265ReferenceInfo): VkVideoDecodeH265DpbSlotInfoKHR;
    sType(): number;
    sType(arg0: number): VkVideoDecodeH265DpbSlotInfoKHR;
    sType$Default(): VkVideoDecodeH265DpbSlotInfoKHR;
    set(arg0: number, arg1: number, arg2: StdVideoDecodeH265ReferenceInfo): VkVideoDecodeH265DpbSlotInfoKHR;
    set(arg0: VkVideoDecodeH265DpbSlotInfoKHR): VkVideoDecodeH265DpbSlotInfoKHR;
    sizeof(): number;
}