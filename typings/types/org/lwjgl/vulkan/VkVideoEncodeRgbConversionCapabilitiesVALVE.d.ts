import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkVideoEncodeRgbConversionCapabilitiesVALVE extends Struct<VkVideoEncodeRgbConversionCapabilitiesVALVE> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RGBMODELS: number;
    static RGBRANGES: number;
    static SIZEOF: number;
    static STYPE: number;
    static XCHROMAOFFSETS: number;
    static YCHROMAOFFSETS: number;
    static calloc(): VkVideoEncodeRgbConversionCapabilitiesVALVE;
    static calloc(paramarg0: MemoryStack): VkVideoEncodeRgbConversionCapabilitiesVALVE;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoEncodeRgbConversionCapabilitiesVALVE;
    static create(paramarg0: number): VkVideoEncodeRgbConversionCapabilitiesVALVE;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoEncodeRgbConversionCapabilitiesVALVE;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoEncodeRgbConversionCapabilitiesVALVE;
    static malloc(paramarg0: MemoryStack): VkVideoEncodeRgbConversionCapabilitiesVALVE;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nrgbModels(paramarg0: number): number;
    static nrgbRanges(paramarg0: number): number;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nxChromaOffsets(paramarg0: number): number;
    static nyChromaOffsets(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoEncodeRgbConversionCapabilitiesVALVE;
    pNext(): number;
    pNext(arg0: number): VkVideoEncodeRgbConversionCapabilitiesVALVE;
    rgbModels(): number;
    rgbRanges(): number;
    sType(): number;
    sType(arg0: number): VkVideoEncodeRgbConversionCapabilitiesVALVE;
    sType$Default(): VkVideoEncodeRgbConversionCapabilitiesVALVE;
    set(arg0: number, arg1: number): VkVideoEncodeRgbConversionCapabilitiesVALVE;
    set(arg0: VkVideoEncodeRgbConversionCapabilitiesVALVE): VkVideoEncodeRgbConversionCapabilitiesVALVE;
    sizeof(): number;
    xChromaOffsets(): number;
    yChromaOffsets(): number;
}