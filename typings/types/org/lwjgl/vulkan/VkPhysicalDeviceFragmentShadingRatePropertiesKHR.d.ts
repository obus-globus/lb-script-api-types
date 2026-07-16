import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExtent2D } from '../../../org/lwjgl/vulkan/VkExtent2D.d.ts'
export class VkPhysicalDeviceFragmentShadingRatePropertiesKHR extends Struct<VkPhysicalDeviceFragmentShadingRatePropertiesKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FRAGMENTSHADINGRATENONTRIVIALCOMBINEROPS: number;
    static FRAGMENTSHADINGRATESTRICTMULTIPLYCOMBINER: number;
    static FRAGMENTSHADINGRATEWITHCONSERVATIVERASTERIZATION: number;
    static FRAGMENTSHADINGRATEWITHCUSTOMSAMPLELOCATIONS: number;
    static FRAGMENTSHADINGRATEWITHFRAGMENTSHADERINTERLOCK: number;
    static FRAGMENTSHADINGRATEWITHSAMPLEMASK: number;
    static FRAGMENTSHADINGRATEWITHSHADERDEPTHSTENCILWRITES: number;
    static FRAGMENTSHADINGRATEWITHSHADERSAMPLEMASK: number;
    static LAYEREDSHADINGRATEATTACHMENTS: number;
    static MAXFRAGMENTSHADINGRATEATTACHMENTTEXELSIZE: number;
    static MAXFRAGMENTSHADINGRATEATTACHMENTTEXELSIZEASPECTRATIO: number;
    static MAXFRAGMENTSHADINGRATECOVERAGESAMPLES: number;
    static MAXFRAGMENTSHADINGRATERASTERIZATIONSAMPLES: number;
    static MAXFRAGMENTSIZE: number;
    static MAXFRAGMENTSIZEASPECTRATIO: number;
    static MINFRAGMENTSHADINGRATEATTACHMENTTEXELSIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PRIMITIVEFRAGMENTSHADINGRATEWITHMULTIPLEVIEWPORTS: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceFragmentShadingRatePropertiesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceFragmentShadingRatePropertiesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceFragmentShadingRatePropertiesKHR;
    static create(paramarg0: number): VkPhysicalDeviceFragmentShadingRatePropertiesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceFragmentShadingRatePropertiesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceFragmentShadingRatePropertiesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceFragmentShadingRatePropertiesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nfragmentShadingRateNonTrivialCombinerOps(paramarg0: number): number;
    static nfragmentShadingRateStrictMultiplyCombiner(paramarg0: number): number;
    static nfragmentShadingRateWithConservativeRasterization(paramarg0: number): number;
    static nfragmentShadingRateWithCustomSampleLocations(paramarg0: number): number;
    static nfragmentShadingRateWithFragmentShaderInterlock(paramarg0: number): number;
    static nfragmentShadingRateWithSampleMask(paramarg0: number): number;
    static nfragmentShadingRateWithShaderDepthStencilWrites(paramarg0: number): number;
    static nfragmentShadingRateWithShaderSampleMask(paramarg0: number): number;
    static nlayeredShadingRateAttachments(paramarg0: number): number;
    static nmaxFragmentShadingRateAttachmentTexelSize(paramarg0: number): VkExtent2D;
    static nmaxFragmentShadingRateAttachmentTexelSizeAspectRatio(paramarg0: number): number;
    static nmaxFragmentShadingRateCoverageSamples(paramarg0: number): number;
    static nmaxFragmentShadingRateRasterizationSamples(paramarg0: number): number;
    static nmaxFragmentSize(paramarg0: number): VkExtent2D;
    static nmaxFragmentSizeAspectRatio(paramarg0: number): number;
    static nminFragmentShadingRateAttachmentTexelSize(paramarg0: number): VkExtent2D;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nprimitiveFragmentShadingRateWithMultipleViewports(paramarg0: number): number;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceFragmentShadingRatePropertiesKHR;
    fragmentShadingRateNonTrivialCombinerOps(): boolean;
    fragmentShadingRateStrictMultiplyCombiner(): boolean;
    fragmentShadingRateWithConservativeRasterization(): boolean;
    fragmentShadingRateWithCustomSampleLocations(): boolean;
    fragmentShadingRateWithFragmentShaderInterlock(): boolean;
    fragmentShadingRateWithSampleMask(): boolean;
    fragmentShadingRateWithShaderDepthStencilWrites(): boolean;
    fragmentShadingRateWithShaderSampleMask(): boolean;
    layeredShadingRateAttachments(): boolean;
    maxFragmentShadingRateAttachmentTexelSize(): VkExtent2D;
    maxFragmentShadingRateAttachmentTexelSizeAspectRatio(): number;
    maxFragmentShadingRateCoverageSamples(): number;
    maxFragmentShadingRateRasterizationSamples(): number;
    maxFragmentSize(): VkExtent2D;
    maxFragmentSizeAspectRatio(): number;
    minFragmentShadingRateAttachmentTexelSize(): VkExtent2D;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceFragmentShadingRatePropertiesKHR;
    primitiveFragmentShadingRateWithMultipleViewports(): boolean;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceFragmentShadingRatePropertiesKHR;
    sType$Default(): VkPhysicalDeviceFragmentShadingRatePropertiesKHR;
    set(arg0: number, arg1: number): VkPhysicalDeviceFragmentShadingRatePropertiesKHR;
    set(arg0: VkPhysicalDeviceFragmentShadingRatePropertiesKHR): VkPhysicalDeviceFragmentShadingRatePropertiesKHR;
    sizeof(): number;
}