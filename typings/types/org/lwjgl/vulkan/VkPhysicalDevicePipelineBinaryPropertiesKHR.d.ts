import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDevicePipelineBinaryPropertiesKHR extends Struct<VkPhysicalDevicePipelineBinaryPropertiesKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PIPELINEBINARYCOMPRESSEDDATA: number;
    static PIPELINEBINARYINTERNALCACHE: number;
    static PIPELINEBINARYINTERNALCACHECONTROL: number;
    static PIPELINEBINARYPRECOMPILEDINTERNALCACHE: number;
    static PIPELINEBINARYPREFERSINTERNALCACHE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDevicePipelineBinaryPropertiesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDevicePipelineBinaryPropertiesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDevicePipelineBinaryPropertiesKHR;
    static create(paramarg0: number): VkPhysicalDevicePipelineBinaryPropertiesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDevicePipelineBinaryPropertiesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDevicePipelineBinaryPropertiesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDevicePipelineBinaryPropertiesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npipelineBinaryCompressedData(paramarg0: number): number;
    static npipelineBinaryInternalCache(paramarg0: number): number;
    static npipelineBinaryInternalCacheControl(paramarg0: number): number;
    static npipelineBinaryPrecompiledInternalCache(paramarg0: number): number;
    static npipelineBinaryPrefersInternalCache(paramarg0: number): number;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDevicePipelineBinaryPropertiesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDevicePipelineBinaryPropertiesKHR;
    pipelineBinaryCompressedData(): boolean;
    pipelineBinaryInternalCache(): boolean;
    pipelineBinaryInternalCacheControl(): boolean;
    pipelineBinaryPrecompiledInternalCache(): boolean;
    pipelineBinaryPrefersInternalCache(): boolean;
    sType(): number;
    sType(arg0: number): VkPhysicalDevicePipelineBinaryPropertiesKHR;
    sType$Default(): VkPhysicalDevicePipelineBinaryPropertiesKHR;
    set(arg0: number, arg1: number): VkPhysicalDevicePipelineBinaryPropertiesKHR;
    set(arg0: VkPhysicalDevicePipelineBinaryPropertiesKHR): VkPhysicalDevicePipelineBinaryPropertiesKHR;
    sizeof(): number;
}