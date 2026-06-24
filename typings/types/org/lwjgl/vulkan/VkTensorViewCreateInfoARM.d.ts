import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkOpaqueCaptureDescriptorDataCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkOpaqueCaptureDescriptorDataCreateInfoEXT.d.ts'
export class VkTensorViewCreateInfoARM extends Struct<VkTensorViewCreateInfoARM> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static FORMAT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static TENSOR: number;
    static calloc(): VkTensorViewCreateInfoARM;
    static calloc(paramarg0: MemoryStack): VkTensorViewCreateInfoARM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkTensorViewCreateInfoARM;
    static create(paramarg0: number): VkTensorViewCreateInfoARM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkTensorViewCreateInfoARM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkTensorViewCreateInfoARM;
    static malloc(paramarg0: MemoryStack): VkTensorViewCreateInfoARM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nformat(paramarg0: number): number;
    static nformat(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static ntensor(paramarg0: number): number;
    static ntensor(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkTensorViewCreateInfoARM;
    flags(): number;
    flags(arg0: number): VkTensorViewCreateInfoARM;
    format(): number;
    format(arg0: number): VkTensorViewCreateInfoARM;
    pNext(): number;
    pNext(arg0: number): VkTensorViewCreateInfoARM;
    pNext(arg0: VkOpaqueCaptureDescriptorDataCreateInfoEXT): VkTensorViewCreateInfoARM;
    sType(): number;
    sType(arg0: number): VkTensorViewCreateInfoARM;
    sType$Default(): VkTensorViewCreateInfoARM;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): VkTensorViewCreateInfoARM;
    set(arg0: VkTensorViewCreateInfoARM): VkTensorViewCreateInfoARM;
    sizeof(): number;
    tensor(): number;
    tensor(arg0: number): VkTensorViewCreateInfoARM;
}