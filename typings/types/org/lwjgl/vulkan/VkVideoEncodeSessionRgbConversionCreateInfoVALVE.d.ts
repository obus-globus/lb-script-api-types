import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkVideoEncodeSessionRgbConversionCreateInfoVALVE extends Struct<VkVideoEncodeSessionRgbConversionCreateInfoVALVE> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RGBMODEL: number;
    static RGBRANGE: number;
    static SIZEOF: number;
    static STYPE: number;
    static XCHROMAOFFSET: number;
    static YCHROMAOFFSET: number;
    static calloc(): VkVideoEncodeSessionRgbConversionCreateInfoVALVE;
    static calloc(paramarg0: MemoryStack): VkVideoEncodeSessionRgbConversionCreateInfoVALVE;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoEncodeSessionRgbConversionCreateInfoVALVE;
    static create(paramarg0: number): VkVideoEncodeSessionRgbConversionCreateInfoVALVE;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoEncodeSessionRgbConversionCreateInfoVALVE;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoEncodeSessionRgbConversionCreateInfoVALVE;
    static malloc(paramarg0: MemoryStack): VkVideoEncodeSessionRgbConversionCreateInfoVALVE;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nrgbModel(paramarg0: number): number;
    static nrgbModel(paramarg0: number, paramarg1: number): void;
    static nrgbRange(paramarg0: number): number;
    static nrgbRange(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nxChromaOffset(paramarg0: number): number;
    static nxChromaOffset(paramarg0: number, paramarg1: number): void;
    static nyChromaOffset(paramarg0: number): number;
    static nyChromaOffset(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoEncodeSessionRgbConversionCreateInfoVALVE;
    pNext(): number;
    pNext(arg0: number): VkVideoEncodeSessionRgbConversionCreateInfoVALVE;
    rgbModel(): number;
    rgbModel(arg0: number): VkVideoEncodeSessionRgbConversionCreateInfoVALVE;
    rgbRange(): number;
    rgbRange(arg0: number): VkVideoEncodeSessionRgbConversionCreateInfoVALVE;
    sType(): number;
    sType(arg0: number): VkVideoEncodeSessionRgbConversionCreateInfoVALVE;
    sType$Default(): VkVideoEncodeSessionRgbConversionCreateInfoVALVE;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): VkVideoEncodeSessionRgbConversionCreateInfoVALVE;
    set(arg0: VkVideoEncodeSessionRgbConversionCreateInfoVALVE): VkVideoEncodeSessionRgbConversionCreateInfoVALVE;
    sizeof(): number;
    xChromaOffset(): number;
    xChromaOffset(arg0: number): VkVideoEncodeSessionRgbConversionCreateInfoVALVE;
    yChromaOffset(): number;
    yChromaOffset(arg0: number): VkVideoEncodeSessionRgbConversionCreateInfoVALVE;
}