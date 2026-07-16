import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExtensionProperties } from '../../../org/lwjgl/vulkan/VkExtensionProperties.d.ts'
import type { VkExtent2D } from '../../../org/lwjgl/vulkan/VkExtent2D.d.ts'
import type { VkVideoDecodeAV1CapabilitiesKHR } from '../../../org/lwjgl/vulkan/VkVideoDecodeAV1CapabilitiesKHR.d.ts'
import type { VkVideoDecodeCapabilitiesKHR } from '../../../org/lwjgl/vulkan/VkVideoDecodeCapabilitiesKHR.d.ts'
import type { VkVideoDecodeH264CapabilitiesKHR } from '../../../org/lwjgl/vulkan/VkVideoDecodeH264CapabilitiesKHR.d.ts'
import type { VkVideoDecodeH265CapabilitiesKHR } from '../../../org/lwjgl/vulkan/VkVideoDecodeH265CapabilitiesKHR.d.ts'
import type { VkVideoDecodeVP9CapabilitiesKHR } from '../../../org/lwjgl/vulkan/VkVideoDecodeVP9CapabilitiesKHR.d.ts'
import type { VkVideoEncodeAV1CapabilitiesKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeAV1CapabilitiesKHR.d.ts'
import type { VkVideoEncodeAV1QuantizationMapCapabilitiesKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeAV1QuantizationMapCapabilitiesKHR.d.ts'
import type { VkVideoEncodeCapabilitiesKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeCapabilitiesKHR.d.ts'
import type { VkVideoEncodeH264CapabilitiesKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeH264CapabilitiesKHR.d.ts'
import type { VkVideoEncodeH264QuantizationMapCapabilitiesKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeH264QuantizationMapCapabilitiesKHR.d.ts'
import type { VkVideoEncodeH265CapabilitiesKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeH265CapabilitiesKHR.d.ts'
import type { VkVideoEncodeH265QuantizationMapCapabilitiesKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeH265QuantizationMapCapabilitiesKHR.d.ts'
import type { VkVideoEncodeIntraRefreshCapabilitiesKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeIntraRefreshCapabilitiesKHR.d.ts'
import type { VkVideoEncodeQuantizationMapCapabilitiesKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeQuantizationMapCapabilitiesKHR.d.ts'
import type { VkVideoEncodeRgbConversionCapabilitiesVALVE } from '../../../org/lwjgl/vulkan/VkVideoEncodeRgbConversionCapabilitiesVALVE.d.ts'
export class VkVideoCapabilitiesKHR extends Struct<VkVideoCapabilitiesKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static MAXACTIVEREFERENCEPICTURES: number;
    static MAXCODEDEXTENT: number;
    static MAXDPBSLOTS: number;
    static MINBITSTREAMBUFFEROFFSETALIGNMENT: number;
    static MINBITSTREAMBUFFERSIZEALIGNMENT: number;
    static MINCODEDEXTENT: number;
    static PICTUREACCESSGRANULARITY: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STDHEADERVERSION: number;
    static STYPE: number;
    static calloc(): VkVideoCapabilitiesKHR;
    static calloc(paramarg0: MemoryStack): VkVideoCapabilitiesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoCapabilitiesKHR;
    static create(paramarg0: number): VkVideoCapabilitiesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoCapabilitiesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoCapabilitiesKHR;
    static malloc(paramarg0: MemoryStack): VkVideoCapabilitiesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nmaxActiveReferencePictures(paramarg0: number): number;
    static nmaxCodedExtent(paramarg0: number): VkExtent2D;
    static nmaxDpbSlots(paramarg0: number): number;
    static nminBitstreamBufferOffsetAlignment(paramarg0: number): number;
    static nminBitstreamBufferSizeAlignment(paramarg0: number): number;
    static nminCodedExtent(paramarg0: number): VkExtent2D;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npictureAccessGranularity(paramarg0: number): VkExtent2D;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nstdHeaderVersion(paramarg0: number): VkExtensionProperties;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoCapabilitiesKHR;
    flags(): number;
    maxActiveReferencePictures(): number;
    maxCodedExtent(): VkExtent2D;
    maxDpbSlots(): number;
    minBitstreamBufferOffsetAlignment(): number;
    minBitstreamBufferSizeAlignment(): number;
    minCodedExtent(): VkExtent2D;
    pNext(): number;
    pNext(arg0: number): VkVideoCapabilitiesKHR;
    pNext(arg0: VkVideoDecodeAV1CapabilitiesKHR): VkVideoCapabilitiesKHR;
    pNext(arg0: VkVideoDecodeCapabilitiesKHR): VkVideoCapabilitiesKHR;
    pNext(arg0: VkVideoDecodeH264CapabilitiesKHR): VkVideoCapabilitiesKHR;
    pNext(arg0: VkVideoDecodeH265CapabilitiesKHR): VkVideoCapabilitiesKHR;
    pNext(arg0: VkVideoDecodeVP9CapabilitiesKHR): VkVideoCapabilitiesKHR;
    pNext(arg0: VkVideoEncodeAV1CapabilitiesKHR): VkVideoCapabilitiesKHR;
    pNext(arg0: VkVideoEncodeAV1QuantizationMapCapabilitiesKHR): VkVideoCapabilitiesKHR;
    pNext(arg0: VkVideoEncodeCapabilitiesKHR): VkVideoCapabilitiesKHR;
    pNext(arg0: VkVideoEncodeH264CapabilitiesKHR): VkVideoCapabilitiesKHR;
    pNext(arg0: VkVideoEncodeH264QuantizationMapCapabilitiesKHR): VkVideoCapabilitiesKHR;
    pNext(arg0: VkVideoEncodeH265CapabilitiesKHR): VkVideoCapabilitiesKHR;
    pNext(arg0: VkVideoEncodeH265QuantizationMapCapabilitiesKHR): VkVideoCapabilitiesKHR;
    pNext(arg0: VkVideoEncodeIntraRefreshCapabilitiesKHR): VkVideoCapabilitiesKHR;
    pNext(arg0: VkVideoEncodeQuantizationMapCapabilitiesKHR): VkVideoCapabilitiesKHR;
    pNext(arg0: VkVideoEncodeRgbConversionCapabilitiesVALVE): VkVideoCapabilitiesKHR;
    pictureAccessGranularity(): VkExtent2D;
    sType(): number;
    sType(arg0: number): VkVideoCapabilitiesKHR;
    sType$Default(): VkVideoCapabilitiesKHR;
    set(arg0: number, arg1: number): VkVideoCapabilitiesKHR;
    set(arg0: VkVideoCapabilitiesKHR): VkVideoCapabilitiesKHR;
    sizeof(): number;
    stdHeaderVersion(): VkExtensionProperties;
}