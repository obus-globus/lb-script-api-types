import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExtent2D } from '../../../org/lwjgl/vulkan/VkExtent2D.d.ts'
export class VkVideoEncodeCapabilitiesKHR extends Struct<VkVideoEncodeCapabilitiesKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static ENCODEINPUTPICTUREGRANULARITY: number;
    static FLAGS: number;
    static MAXBITRATE: number;
    static MAXQUALITYLEVELS: number;
    static MAXRATECONTROLLAYERS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RATECONTROLMODES: number;
    static SIZEOF: number;
    static STYPE: number;
    static SUPPORTEDENCODEFEEDBACKFLAGS: number;
    static calloc(): VkVideoEncodeCapabilitiesKHR;
    static calloc(paramarg0: MemoryStack): VkVideoEncodeCapabilitiesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoEncodeCapabilitiesKHR;
    static create(paramarg0: number): VkVideoEncodeCapabilitiesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoEncodeCapabilitiesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoEncodeCapabilitiesKHR;
    static malloc(paramarg0: MemoryStack): VkVideoEncodeCapabilitiesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nencodeInputPictureGranularity(paramarg0: number): VkExtent2D;
    static nflags(paramarg0: number): number;
    static nmaxBitrate(paramarg0: number): number;
    static nmaxQualityLevels(paramarg0: number): number;
    static nmaxRateControlLayers(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nrateControlModes(paramarg0: number): number;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsupportedEncodeFeedbackFlags(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoEncodeCapabilitiesKHR;
    encodeInputPictureGranularity(): VkExtent2D;
    flags(): number;
    maxBitrate(): number;
    maxQualityLevels(): number;
    maxRateControlLayers(): number;
    pNext(): number;
    pNext(arg0: number): VkVideoEncodeCapabilitiesKHR;
    rateControlModes(): number;
    sType(): number;
    sType(arg0: number): VkVideoEncodeCapabilitiesKHR;
    sType$Default(): VkVideoEncodeCapabilitiesKHR;
    set(arg0: number, arg1: number): VkVideoEncodeCapabilitiesKHR;
    set(arg0: VkVideoEncodeCapabilitiesKHR): VkVideoEncodeCapabilitiesKHR;
    sizeof(): number;
    supportedEncodeFeedbackFlags(): number;
}