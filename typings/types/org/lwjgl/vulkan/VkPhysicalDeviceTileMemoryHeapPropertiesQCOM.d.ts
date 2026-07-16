import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceTileMemoryHeapPropertiesQCOM extends Struct<VkPhysicalDeviceTileMemoryHeapPropertiesQCOM> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static QUEUESUBMITBOUNDARY: number;
    static SIZEOF: number;
    static STYPE: number;
    static TILEBUFFERTRANSFERS: number;
    static calloc(): VkPhysicalDeviceTileMemoryHeapPropertiesQCOM;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceTileMemoryHeapPropertiesQCOM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceTileMemoryHeapPropertiesQCOM;
    static create(paramarg0: number): VkPhysicalDeviceTileMemoryHeapPropertiesQCOM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceTileMemoryHeapPropertiesQCOM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceTileMemoryHeapPropertiesQCOM;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceTileMemoryHeapPropertiesQCOM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nqueueSubmitBoundary(paramarg0: number): number;
    static nqueueSubmitBoundary(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static ntileBufferTransfers(paramarg0: number): number;
    static ntileBufferTransfers(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceTileMemoryHeapPropertiesQCOM;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceTileMemoryHeapPropertiesQCOM;
    queueSubmitBoundary(): boolean;
    queueSubmitBoundary(arg0: boolean): VkPhysicalDeviceTileMemoryHeapPropertiesQCOM;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceTileMemoryHeapPropertiesQCOM;
    sType$Default(): VkPhysicalDeviceTileMemoryHeapPropertiesQCOM;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean): VkPhysicalDeviceTileMemoryHeapPropertiesQCOM;
    set(arg0: VkPhysicalDeviceTileMemoryHeapPropertiesQCOM): VkPhysicalDeviceTileMemoryHeapPropertiesQCOM;
    sizeof(): number;
    tileBufferTransfers(): boolean;
    tileBufferTransfers(arg0: boolean): VkPhysicalDeviceTileMemoryHeapPropertiesQCOM;
}