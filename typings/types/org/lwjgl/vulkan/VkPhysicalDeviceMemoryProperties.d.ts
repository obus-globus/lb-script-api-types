import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkMemoryHeap } from '../../../org/lwjgl/vulkan/VkMemoryHeap.d.ts'
import type { VkMemoryType } from '../../../org/lwjgl/vulkan/VkMemoryType.d.ts'
export class VkPhysicalDeviceMemoryProperties extends Struct<VkPhysicalDeviceMemoryProperties> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MEMORYHEAPCOUNT: number;
    static MEMORYHEAPS: number;
    static MEMORYTYPECOUNT: number;
    static MEMORYTYPES: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): VkPhysicalDeviceMemoryProperties;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceMemoryProperties;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceMemoryProperties;
    static create(paramarg0: number): VkPhysicalDeviceMemoryProperties;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceMemoryProperties;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceMemoryProperties;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceMemoryProperties;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmemoryHeapCount(paramarg0: number): number;
    static nmemoryHeaps(paramarg0: number, paramarg1: number): VkMemoryHeap;
    static nmemoryHeaps(paramarg0: number): (Object | null)[];
    static nmemoryTypeCount(paramarg0: number): number;
    static nmemoryTypes(paramarg0: number, paramarg1: number): VkMemoryType;
    static nmemoryTypes(paramarg0: number): (Object | null)[];
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceMemoryProperties;
    memoryHeapCount(): number;
    memoryHeaps(): (Object | null)[];
    memoryHeaps(arg0: number): VkMemoryHeap;
    memoryTypeCount(): number;
    memoryTypes(): (Object | null)[];
    memoryTypes(arg0: number): VkMemoryType;
    sizeof(): number;
}