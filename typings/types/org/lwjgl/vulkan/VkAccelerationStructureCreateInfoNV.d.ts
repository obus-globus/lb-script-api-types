import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkAccelerationStructureInfoNV } from '../../../org/lwjgl/vulkan/VkAccelerationStructureInfoNV.d.ts'
import type { VkOpaqueCaptureDescriptorDataCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkOpaqueCaptureDescriptorDataCreateInfoEXT.d.ts'
export class VkAccelerationStructureCreateInfoNV extends Struct<VkAccelerationStructureCreateInfoNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COMPACTEDSIZE: number;
    static INFO: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkAccelerationStructureCreateInfoNV;
    static calloc(paramarg0: MemoryStack): VkAccelerationStructureCreateInfoNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkAccelerationStructureCreateInfoNV;
    static create(paramarg0: number): VkAccelerationStructureCreateInfoNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkAccelerationStructureCreateInfoNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkAccelerationStructureCreateInfoNV;
    static malloc(paramarg0: MemoryStack): VkAccelerationStructureCreateInfoNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncompactedSize(paramarg0: number): number;
    static ncompactedSize(paramarg0: number, paramarg1: number): void;
    static ninfo(paramarg0: number): VkAccelerationStructureInfoNV;
    static ninfo(paramarg0: number, paramarg1: VkAccelerationStructureInfoNV): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    compactedSize(): number;
    compactedSize(arg0: number): VkAccelerationStructureCreateInfoNV;
    create(arg0: number, arg1: ByteBuffer): VkAccelerationStructureCreateInfoNV;
    info(): VkAccelerationStructureInfoNV;
    info(arg0: (param0: VkAccelerationStructureInfoNV) => void): VkAccelerationStructureCreateInfoNV;
    info(arg0: VkAccelerationStructureInfoNV): VkAccelerationStructureCreateInfoNV;
    pNext(): number;
    pNext(arg0: number): VkAccelerationStructureCreateInfoNV;
    pNext(arg0: VkOpaqueCaptureDescriptorDataCreateInfoEXT): VkAccelerationStructureCreateInfoNV;
    sType(): number;
    sType(arg0: number): VkAccelerationStructureCreateInfoNV;
    sType$Default(): VkAccelerationStructureCreateInfoNV;
    set(arg0: number, arg1: number, arg2: number, arg3: VkAccelerationStructureInfoNV): VkAccelerationStructureCreateInfoNV;
    set(arg0: VkAccelerationStructureCreateInfoNV): VkAccelerationStructureCreateInfoNV;
    sizeof(): number;
}