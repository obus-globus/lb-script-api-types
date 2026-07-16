import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceDescriptorBufferTensorPropertiesARM extends Struct<VkPhysicalDeviceDescriptorBufferTensorPropertiesARM> implements NativeResource {
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
    static TENSORCAPTUREREPLAYDESCRIPTORDATASIZE: number;
    static TENSORDESCRIPTORSIZE: number;
    static TENSORVIEWCAPTUREREPLAYDESCRIPTORDATASIZE: number;
    static calloc(): VkPhysicalDeviceDescriptorBufferTensorPropertiesARM;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceDescriptorBufferTensorPropertiesARM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceDescriptorBufferTensorPropertiesARM;
    static create(paramarg0: number): VkPhysicalDeviceDescriptorBufferTensorPropertiesARM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceDescriptorBufferTensorPropertiesARM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceDescriptorBufferTensorPropertiesARM;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceDescriptorBufferTensorPropertiesARM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static ntensorCaptureReplayDescriptorDataSize(paramarg0: number): number;
    static ntensorCaptureReplayDescriptorDataSize(paramarg0: number, paramarg1: number): void;
    static ntensorDescriptorSize(paramarg0: number): number;
    static ntensorDescriptorSize(paramarg0: number, paramarg1: number): void;
    static ntensorViewCaptureReplayDescriptorDataSize(paramarg0: number): number;
    static ntensorViewCaptureReplayDescriptorDataSize(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceDescriptorBufferTensorPropertiesARM;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceDescriptorBufferTensorPropertiesARM;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceDescriptorBufferTensorPropertiesARM;
    sType$Default(): VkPhysicalDeviceDescriptorBufferTensorPropertiesARM;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): VkPhysicalDeviceDescriptorBufferTensorPropertiesARM;
    set(arg0: VkPhysicalDeviceDescriptorBufferTensorPropertiesARM): VkPhysicalDeviceDescriptorBufferTensorPropertiesARM;
    sizeof(): number;
    tensorCaptureReplayDescriptorDataSize(): number;
    tensorCaptureReplayDescriptorDataSize(arg0: number): VkPhysicalDeviceDescriptorBufferTensorPropertiesARM;
    tensorDescriptorSize(): number;
    tensorDescriptorSize(arg0: number): VkPhysicalDeviceDescriptorBufferTensorPropertiesARM;
    tensorViewCaptureReplayDescriptorDataSize(): number;
    tensorViewCaptureReplayDescriptorDataSize(arg0: number): VkPhysicalDeviceDescriptorBufferTensorPropertiesARM;
}