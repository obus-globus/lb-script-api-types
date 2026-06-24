import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkVideoEncodeH264CapabilitiesKHR extends Struct<VkVideoEncodeH264CapabilitiesKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static EXPECTDYADICTEMPORALLAYERPATTERN: number;
    static FLAGS: number;
    static MAXBPICTUREL0REFERENCECOUNT: number;
    static MAXL1REFERENCECOUNT: number;
    static MAXLEVELIDC: number;
    static MAXPPICTUREL0REFERENCECOUNT: number;
    static MAXQP: number;
    static MAXSLICECOUNT: number;
    static MAXTEMPORALLAYERCOUNT: number;
    static MINQP: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PREFERSGOPREMAININGFRAMES: number;
    static REQUIRESGOPREMAININGFRAMES: number;
    static SIZEOF: number;
    static STDSYNTAXFLAGS: number;
    static STYPE: number;
    static calloc(): VkVideoEncodeH264CapabilitiesKHR;
    static calloc(paramarg0: MemoryStack): VkVideoEncodeH264CapabilitiesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoEncodeH264CapabilitiesKHR;
    static create(paramarg0: number): VkVideoEncodeH264CapabilitiesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoEncodeH264CapabilitiesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoEncodeH264CapabilitiesKHR;
    static malloc(paramarg0: MemoryStack): VkVideoEncodeH264CapabilitiesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nexpectDyadicTemporalLayerPattern(paramarg0: number): number;
    static nflags(paramarg0: number): number;
    static nmaxBPictureL0ReferenceCount(paramarg0: number): number;
    static nmaxL1ReferenceCount(paramarg0: number): number;
    static nmaxLevelIdc(paramarg0: number): number;
    static nmaxPPictureL0ReferenceCount(paramarg0: number): number;
    static nmaxQp(paramarg0: number): number;
    static nmaxSliceCount(paramarg0: number): number;
    static nmaxTemporalLayerCount(paramarg0: number): number;
    static nminQp(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nprefersGopRemainingFrames(paramarg0: number): number;
    static nrequiresGopRemainingFrames(paramarg0: number): number;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nstdSyntaxFlags(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoEncodeH264CapabilitiesKHR;
    expectDyadicTemporalLayerPattern(): boolean;
    flags(): number;
    maxBPictureL0ReferenceCount(): number;
    maxL1ReferenceCount(): number;
    maxLevelIdc(): number;
    maxPPictureL0ReferenceCount(): number;
    maxQp(): number;
    maxSliceCount(): number;
    maxTemporalLayerCount(): number;
    minQp(): number;
    pNext(): number;
    pNext(arg0: number): VkVideoEncodeH264CapabilitiesKHR;
    prefersGopRemainingFrames(): boolean;
    requiresGopRemainingFrames(): boolean;
    sType(): number;
    sType(arg0: number): VkVideoEncodeH264CapabilitiesKHR;
    sType$Default(): VkVideoEncodeH264CapabilitiesKHR;
    set(arg0: number, arg1: number): VkVideoEncodeH264CapabilitiesKHR;
    set(arg0: VkVideoEncodeH264CapabilitiesKHR): VkVideoEncodeH264CapabilitiesKHR;
    sizeof(): number;
    stdSyntaxFlags(): number;
}