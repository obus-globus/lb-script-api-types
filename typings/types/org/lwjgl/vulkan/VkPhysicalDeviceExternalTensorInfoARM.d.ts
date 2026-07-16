import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkTensorDescriptionARM } from '../../../org/lwjgl/vulkan/VkTensorDescriptionARM.d.ts'
export class VkPhysicalDeviceExternalTensorInfoARM extends Struct<VkPhysicalDeviceExternalTensorInfoARM> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static HANDLETYPE: number;
    static PDESCRIPTION: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceExternalTensorInfoARM;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceExternalTensorInfoARM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceExternalTensorInfoARM;
    static create(paramarg0: number): VkPhysicalDeviceExternalTensorInfoARM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceExternalTensorInfoARM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceExternalTensorInfoARM;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceExternalTensorInfoARM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nhandleType(paramarg0: number): number;
    static nhandleType(paramarg0: number, paramarg1: number): void;
    static npDescription(paramarg0: number): VkTensorDescriptionARM;
    static npDescription(paramarg0: number, paramarg1: VkTensorDescriptionARM): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceExternalTensorInfoARM;
    flags(): number;
    flags(arg0: number): VkPhysicalDeviceExternalTensorInfoARM;
    handleType(): number;
    handleType(arg0: number): VkPhysicalDeviceExternalTensorInfoARM;
    pDescription(): VkTensorDescriptionARM;
    pDescription(arg0: VkTensorDescriptionARM): VkPhysicalDeviceExternalTensorInfoARM;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceExternalTensorInfoARM;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceExternalTensorInfoARM;
    sType$Default(): VkPhysicalDeviceExternalTensorInfoARM;
    set(arg0: number, arg1: number, arg2: number, arg3: VkTensorDescriptionARM, arg4: number): VkPhysicalDeviceExternalTensorInfoARM;
    set(arg0: VkPhysicalDeviceExternalTensorInfoARM): VkPhysicalDeviceExternalTensorInfoARM;
    sizeof(): number;
}