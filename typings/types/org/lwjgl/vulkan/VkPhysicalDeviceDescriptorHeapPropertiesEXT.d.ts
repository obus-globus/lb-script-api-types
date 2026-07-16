import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceDescriptorHeapPropertiesEXT extends Struct<VkPhysicalDeviceDescriptorHeapPropertiesEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BUFFERDESCRIPTORALIGNMENT: number;
    static BUFFERDESCRIPTORSIZE: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static IMAGECAPTUREREPLAYOPAQUEDATASIZE: number;
    static IMAGEDESCRIPTORALIGNMENT: number;
    static IMAGEDESCRIPTORSIZE: number;
    static MAXDESCRIPTORHEAPEMBEDDEDSAMPLERS: number;
    static MAXPUSHDATASIZE: number;
    static MAXRESOURCEHEAPSIZE: number;
    static MAXSAMPLERHEAPSIZE: number;
    static MINRESOURCEHEAPRESERVEDRANGE: number;
    static MINSAMPLERHEAPRESERVEDRANGE: number;
    static MINSAMPLERHEAPRESERVEDRANGEWITHEMBEDDED: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PROTECTEDDESCRIPTORHEAPS: number;
    static RESOURCEHEAPALIGNMENT: number;
    static SAMPLERDESCRIPTORALIGNMENT: number;
    static SAMPLERDESCRIPTORSIZE: number;
    static SAMPLERHEAPALIGNMENT: number;
    static SAMPLERYCBCRCONVERSIONCOUNT: number;
    static SIZEOF: number;
    static SPARSEDESCRIPTORHEAPS: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceDescriptorHeapPropertiesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceDescriptorHeapPropertiesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceDescriptorHeapPropertiesEXT;
    static create(paramarg0: number): VkPhysicalDeviceDescriptorHeapPropertiesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceDescriptorHeapPropertiesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceDescriptorHeapPropertiesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceDescriptorHeapPropertiesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbufferDescriptorAlignment(paramarg0: number): number;
    static nbufferDescriptorSize(paramarg0: number): number;
    static nimageCaptureReplayOpaqueDataSize(paramarg0: number): number;
    static nimageDescriptorAlignment(paramarg0: number): number;
    static nimageDescriptorSize(paramarg0: number): number;
    static nmaxDescriptorHeapEmbeddedSamplers(paramarg0: number): number;
    static nmaxPushDataSize(paramarg0: number): number;
    static nmaxResourceHeapSize(paramarg0: number): number;
    static nmaxSamplerHeapSize(paramarg0: number): number;
    static nminResourceHeapReservedRange(paramarg0: number): number;
    static nminSamplerHeapReservedRange(paramarg0: number): number;
    static nminSamplerHeapReservedRangeWithEmbedded(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nprotectedDescriptorHeaps(paramarg0: number): number;
    static nresourceHeapAlignment(paramarg0: number): number;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsamplerDescriptorAlignment(paramarg0: number): number;
    static nsamplerDescriptorSize(paramarg0: number): number;
    static nsamplerHeapAlignment(paramarg0: number): number;
    static nsamplerYcbcrConversionCount(paramarg0: number): number;
    static nsparseDescriptorHeaps(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    bufferDescriptorAlignment(): number;
    bufferDescriptorSize(): number;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceDescriptorHeapPropertiesEXT;
    imageCaptureReplayOpaqueDataSize(): number;
    imageDescriptorAlignment(): number;
    imageDescriptorSize(): number;
    maxDescriptorHeapEmbeddedSamplers(): number;
    maxPushDataSize(): number;
    maxResourceHeapSize(): number;
    maxSamplerHeapSize(): number;
    minResourceHeapReservedRange(): number;
    minSamplerHeapReservedRange(): number;
    minSamplerHeapReservedRangeWithEmbedded(): number;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceDescriptorHeapPropertiesEXT;
    protectedDescriptorHeaps(): boolean;
    resourceHeapAlignment(): number;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceDescriptorHeapPropertiesEXT;
    sType$Default(): VkPhysicalDeviceDescriptorHeapPropertiesEXT;
    samplerDescriptorAlignment(): number;
    samplerDescriptorSize(): number;
    samplerHeapAlignment(): number;
    samplerYcbcrConversionCount(): number;
    set(arg0: number, arg1: number): VkPhysicalDeviceDescriptorHeapPropertiesEXT;
    set(arg0: VkPhysicalDeviceDescriptorHeapPropertiesEXT): VkPhysicalDeviceDescriptorHeapPropertiesEXT;
    sizeof(): number;
    sparseDescriptorHeaps(): boolean;
}