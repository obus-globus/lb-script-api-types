import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class SpvcMslSamplerYcbcrConversion extends Struct<SpvcMslSamplerYcbcrConversion> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BPC: number;
    static CHROMA_FILTER: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PLANES: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RESOLUTION: number;
    static SIZEOF: number;
    static SWIZZLE: number;
    static X_CHROMA_OFFSET: number;
    static YCBCR_MODEL: number;
    static YCBCR_RANGE: number;
    static Y_CHROMA_OFFSET: number;
    static calloc(): SpvcMslSamplerYcbcrConversion;
    static calloc(paramarg0: MemoryStack): SpvcMslSamplerYcbcrConversion;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): SpvcMslSamplerYcbcrConversion;
    static create(paramarg0: number): SpvcMslSamplerYcbcrConversion;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): SpvcMslSamplerYcbcrConversion;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): SpvcMslSamplerYcbcrConversion;
    static malloc(paramarg0: MemoryStack): SpvcMslSamplerYcbcrConversion;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbpc(paramarg0: number): number;
    static nbpc(paramarg0: number, paramarg1: number): void;
    static nchroma_filter(paramarg0: number): number;
    static nchroma_filter(paramarg0: number, paramarg1: number): void;
    static nplanes(paramarg0: number): number;
    static nplanes(paramarg0: number, paramarg1: number): void;
    static nresolution(paramarg0: number): number;
    static nresolution(paramarg0: number, paramarg1: number): void;
    static nswizzle(paramarg0: number, paramarg1: number): number;
    static nswizzle(paramarg0: number): IntBuffer;
    static nswizzle(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nswizzle(paramarg0: number, paramarg1: IntBuffer): void;
    static nx_chroma_offset(paramarg0: number): number;
    static nx_chroma_offset(paramarg0: number, paramarg1: number): void;
    static ny_chroma_offset(paramarg0: number): number;
    static ny_chroma_offset(paramarg0: number, paramarg1: number): void;
    static nycbcr_model(paramarg0: number): number;
    static nycbcr_model(paramarg0: number, paramarg1: number): void;
    static nycbcr_range(paramarg0: number): number;
    static nycbcr_range(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    bpc(): number;
    bpc(arg0: number): SpvcMslSamplerYcbcrConversion;
    chroma_filter(): number;
    chroma_filter(arg0: number): SpvcMslSamplerYcbcrConversion;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): SpvcMslSamplerYcbcrConversion;
    planes(): number;
    planes(arg0: number): SpvcMslSamplerYcbcrConversion;
    resolution(): number;
    resolution(arg0: number): SpvcMslSamplerYcbcrConversion;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: IntBuffer, arg6: number, arg7: number, arg8: number): SpvcMslSamplerYcbcrConversion;
    set(arg0: SpvcMslSamplerYcbcrConversion): SpvcMslSamplerYcbcrConversion;
    sizeof(): number;
    swizzle(): IntBuffer;
    swizzle(arg0: IntBuffer): SpvcMslSamplerYcbcrConversion;
    swizzle(arg0: number): number;
    swizzle(arg0: number, arg1: number): SpvcMslSamplerYcbcrConversion;
    x_chroma_offset(): number;
    x_chroma_offset(arg0: number): SpvcMslSamplerYcbcrConversion;
    y_chroma_offset(): number;
    y_chroma_offset(arg0: number): SpvcMslSamplerYcbcrConversion;
    ycbcr_model(): number;
    ycbcr_model(arg0: number): SpvcMslSamplerYcbcrConversion;
    ycbcr_range(): number;
    ycbcr_range(arg0: number): SpvcMslSamplerYcbcrConversion;
}