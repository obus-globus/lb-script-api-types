import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkVideoDecodeH264SessionParametersAddInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoDecodeH264SessionParametersAddInfoKHR.d.ts'
import type { VkVideoDecodeH265SessionParametersAddInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoDecodeH265SessionParametersAddInfoKHR.d.ts'
import type { VkVideoEncodeH264SessionParametersAddInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeH264SessionParametersAddInfoKHR.d.ts'
import type { VkVideoEncodeH265SessionParametersAddInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeH265SessionParametersAddInfoKHR.d.ts'
export class VkVideoSessionParametersUpdateInfoKHR extends Struct<VkVideoSessionParametersUpdateInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static UPDATESEQUENCECOUNT: number;
    static calloc(): VkVideoSessionParametersUpdateInfoKHR;
    static calloc(paramarg0: MemoryStack): VkVideoSessionParametersUpdateInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoSessionParametersUpdateInfoKHR;
    static create(paramarg0: number): VkVideoSessionParametersUpdateInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoSessionParametersUpdateInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoSessionParametersUpdateInfoKHR;
    static malloc(paramarg0: MemoryStack): VkVideoSessionParametersUpdateInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nupdateSequenceCount(paramarg0: number): number;
    static nupdateSequenceCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoSessionParametersUpdateInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkVideoSessionParametersUpdateInfoKHR;
    pNext(arg0: VkVideoDecodeH264SessionParametersAddInfoKHR): VkVideoSessionParametersUpdateInfoKHR;
    pNext(arg0: VkVideoDecodeH265SessionParametersAddInfoKHR): VkVideoSessionParametersUpdateInfoKHR;
    pNext(arg0: VkVideoEncodeH264SessionParametersAddInfoKHR): VkVideoSessionParametersUpdateInfoKHR;
    pNext(arg0: VkVideoEncodeH265SessionParametersAddInfoKHR): VkVideoSessionParametersUpdateInfoKHR;
    sType(): number;
    sType(arg0: number): VkVideoSessionParametersUpdateInfoKHR;
    sType$Default(): VkVideoSessionParametersUpdateInfoKHR;
    set(arg0: number, arg1: number, arg2: number): VkVideoSessionParametersUpdateInfoKHR;
    set(arg0: VkVideoSessionParametersUpdateInfoKHR): VkVideoSessionParametersUpdateInfoKHR;
    sizeof(): number;
    updateSequenceCount(): number;
    updateSequenceCount(arg0: number): VkVideoSessionParametersUpdateInfoKHR;
}