import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceDescriptorBufferFeaturesEXT extends Struct<VkPhysicalDeviceDescriptorBufferFeaturesEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTORBUFFER: number;
    static DESCRIPTORBUFFERCAPTUREREPLAY: number;
    static DESCRIPTORBUFFERIMAGELAYOUTIGNORED: number;
    static DESCRIPTORBUFFERPUSHDESCRIPTORS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceDescriptorBufferFeaturesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceDescriptorBufferFeaturesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceDescriptorBufferFeaturesEXT;
    static create(paramarg0: number): VkPhysicalDeviceDescriptorBufferFeaturesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceDescriptorBufferFeaturesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceDescriptorBufferFeaturesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceDescriptorBufferFeaturesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndescriptorBuffer(paramarg0: number): number;
    static ndescriptorBuffer(paramarg0: number, paramarg1: number): void;
    static ndescriptorBufferCaptureReplay(paramarg0: number): number;
    static ndescriptorBufferCaptureReplay(paramarg0: number, paramarg1: number): void;
    static ndescriptorBufferImageLayoutIgnored(paramarg0: number): number;
    static ndescriptorBufferImageLayoutIgnored(paramarg0: number, paramarg1: number): void;
    static ndescriptorBufferPushDescriptors(paramarg0: number): number;
    static ndescriptorBufferPushDescriptors(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceDescriptorBufferFeaturesEXT;
    descriptorBuffer(): boolean;
    descriptorBuffer(arg0: boolean): VkPhysicalDeviceDescriptorBufferFeaturesEXT;
    descriptorBufferCaptureReplay(): boolean;
    descriptorBufferCaptureReplay(arg0: boolean): VkPhysicalDeviceDescriptorBufferFeaturesEXT;
    descriptorBufferImageLayoutIgnored(): boolean;
    descriptorBufferImageLayoutIgnored(arg0: boolean): VkPhysicalDeviceDescriptorBufferFeaturesEXT;
    descriptorBufferPushDescriptors(): boolean;
    descriptorBufferPushDescriptors(arg0: boolean): VkPhysicalDeviceDescriptorBufferFeaturesEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceDescriptorBufferFeaturesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceDescriptorBufferFeaturesEXT;
    sType$Default(): VkPhysicalDeviceDescriptorBufferFeaturesEXT;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean): VkPhysicalDeviceDescriptorBufferFeaturesEXT;
    set(arg0: VkPhysicalDeviceDescriptorBufferFeaturesEXT): VkPhysicalDeviceDescriptorBufferFeaturesEXT;
    sizeof(): number;
}