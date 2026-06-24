import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExtent2D } from '../../../org/lwjgl/vulkan/VkExtent2D.d.ts'
export class VkVideoEncodeH265CapabilitiesKHR extends Struct<VkVideoEncodeH265CapabilitiesKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CTBSIZES: number;
    static EXPECTDYADICTEMPORALSUBLAYERPATTERN: number;
    static FLAGS: number;
    static MAXBPICTUREL0REFERENCECOUNT: number;
    static MAXL1REFERENCECOUNT: number;
    static MAXLEVELIDC: number;
    static MAXPPICTUREL0REFERENCECOUNT: number;
    static MAXQP: number;
    static MAXSLICESEGMENTCOUNT: number;
    static MAXSUBLAYERCOUNT: number;
    static MAXTILES: number;
    static MINQP: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PREFERSGOPREMAININGFRAMES: number;
    static REQUIRESGOPREMAININGFRAMES: number;
    static SIZEOF: number;
    static STDSYNTAXFLAGS: number;
    static STYPE: number;
    static TRANSFORMBLOCKSIZES: number;
    static calloc(): VkVideoEncodeH265CapabilitiesKHR;
    static calloc(paramarg0: MemoryStack): VkVideoEncodeH265CapabilitiesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoEncodeH265CapabilitiesKHR;
    static create(paramarg0: number): VkVideoEncodeH265CapabilitiesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoEncodeH265CapabilitiesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoEncodeH265CapabilitiesKHR;
    static malloc(paramarg0: MemoryStack): VkVideoEncodeH265CapabilitiesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nctbSizes(paramarg0: number): number;
    static nexpectDyadicTemporalSubLayerPattern(paramarg0: number): number;
    static nflags(paramarg0: number): number;
    static nmaxBPictureL0ReferenceCount(paramarg0: number): number;
    static nmaxL1ReferenceCount(paramarg0: number): number;
    static nmaxLevelIdc(paramarg0: number): number;
    static nmaxPPictureL0ReferenceCount(paramarg0: number): number;
    static nmaxQp(paramarg0: number): number;
    static nmaxSliceSegmentCount(paramarg0: number): number;
    static nmaxSubLayerCount(paramarg0: number): number;
    static nmaxTiles(paramarg0: number): VkExtent2D;
    static nminQp(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nprefersGopRemainingFrames(paramarg0: number): number;
    static nrequiresGopRemainingFrames(paramarg0: number): number;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nstdSyntaxFlags(paramarg0: number): number;
    static ntransformBlockSizes(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoEncodeH265CapabilitiesKHR;
    ctbSizes(): number;
    expectDyadicTemporalSubLayerPattern(): boolean;
    flags(): number;
    maxBPictureL0ReferenceCount(): number;
    maxL1ReferenceCount(): number;
    maxLevelIdc(): number;
    maxPPictureL0ReferenceCount(): number;
    maxQp(): number;
    maxSliceSegmentCount(): number;
    maxSubLayerCount(): number;
    maxTiles(): VkExtent2D;
    minQp(): number;
    pNext(): number;
    pNext(arg0: number): VkVideoEncodeH265CapabilitiesKHR;
    prefersGopRemainingFrames(): boolean;
    requiresGopRemainingFrames(): boolean;
    sType(): number;
    sType(arg0: number): VkVideoEncodeH265CapabilitiesKHR;
    sType$Default(): VkVideoEncodeH265CapabilitiesKHR;
    set(arg0: number, arg1: number): VkVideoEncodeH265CapabilitiesKHR;
    set(arg0: VkVideoEncodeH265CapabilitiesKHR): VkVideoEncodeH265CapabilitiesKHR;
    sizeof(): number;
    stdSyntaxFlags(): number;
    transformBlockSizes(): number;
}