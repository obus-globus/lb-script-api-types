import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class SpvcCombinedImageSampler extends Struct<SpvcCombinedImageSampler> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COMBINED_ID: number;
    static IMAGE_ID: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SAMPLER_ID: number;
    static SIZEOF: number;
    static calloc(): SpvcCombinedImageSampler;
    static calloc(paramarg0: MemoryStack): SpvcCombinedImageSampler;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): SpvcCombinedImageSampler;
    static create(paramarg0: number): SpvcCombinedImageSampler;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): SpvcCombinedImageSampler;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): SpvcCombinedImageSampler;
    static malloc(paramarg0: MemoryStack): SpvcCombinedImageSampler;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncombined_id(paramarg0: number): number;
    static ncombined_id(paramarg0: number, paramarg1: number): void;
    static nimage_id(paramarg0: number): number;
    static nimage_id(paramarg0: number, paramarg1: number): void;
    static nsampler_id(paramarg0: number): number;
    static nsampler_id(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    combined_id(): number;
    combined_id(arg0: number): SpvcCombinedImageSampler;
    create(arg0: number, arg1: ByteBuffer): SpvcCombinedImageSampler;
    image_id(): number;
    image_id(arg0: number): SpvcCombinedImageSampler;
    sampler_id(): number;
    sampler_id(arg0: number): SpvcCombinedImageSampler;
    set(arg0: number, arg1: number, arg2: number): SpvcCombinedImageSampler;
    set(arg0: SpvcCombinedImageSampler): SpvcCombinedImageSampler;
    sizeof(): number;
}