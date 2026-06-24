import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceDescriptorHeapFeaturesEXT extends Struct<VkPhysicalDeviceDescriptorHeapFeaturesEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTORHEAP: number;
    static DESCRIPTORHEAPCAPTUREREPLAY: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceDescriptorHeapFeaturesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceDescriptorHeapFeaturesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceDescriptorHeapFeaturesEXT;
    static create(paramarg0: number): VkPhysicalDeviceDescriptorHeapFeaturesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceDescriptorHeapFeaturesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceDescriptorHeapFeaturesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceDescriptorHeapFeaturesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndescriptorHeap(paramarg0: number): number;
    static ndescriptorHeap(paramarg0: number, paramarg1: number): void;
    static ndescriptorHeapCaptureReplay(paramarg0: number): number;
    static ndescriptorHeapCaptureReplay(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceDescriptorHeapFeaturesEXT;
    descriptorHeap(): boolean;
    descriptorHeap(arg0: boolean): VkPhysicalDeviceDescriptorHeapFeaturesEXT;
    descriptorHeapCaptureReplay(): boolean;
    descriptorHeapCaptureReplay(arg0: boolean): VkPhysicalDeviceDescriptorHeapFeaturesEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceDescriptorHeapFeaturesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceDescriptorHeapFeaturesEXT;
    sType$Default(): VkPhysicalDeviceDescriptorHeapFeaturesEXT;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean): VkPhysicalDeviceDescriptorHeapFeaturesEXT;
    set(arg0: VkPhysicalDeviceDescriptorHeapFeaturesEXT): VkPhysicalDeviceDescriptorHeapFeaturesEXT;
    sizeof(): number;
}