import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class StdVideoDecodeVP9PictureInfoFlags extends Struct<StdVideoDecodeVP9PictureInfoFlags> implements NativeResource {
    static ALIGNOF: number;
    static BITFIELD0: number;
    static BITFIELD1: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): StdVideoDecodeVP9PictureInfoFlags;
    static calloc(paramarg0: MemoryStack): StdVideoDecodeVP9PictureInfoFlags;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoDecodeVP9PictureInfoFlags;
    static create(paramarg0: number): StdVideoDecodeVP9PictureInfoFlags;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoDecodeVP9PictureInfoFlags;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoDecodeVP9PictureInfoFlags;
    static malloc(paramarg0: MemoryStack): StdVideoDecodeVP9PictureInfoFlags;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nUsePrevFrameMvs(paramarg0: number): number;
    static nUsePrevFrameMvs(paramarg0: number, paramarg1: number): void;
    static nallow_high_precision_mv(paramarg0: number): number;
    static nallow_high_precision_mv(paramarg0: number, paramarg1: number): void;
    static nbitfield0(paramarg0: number): number;
    static nbitfield0(paramarg0: number, paramarg1: number): void;
    static nbitfield1(paramarg0: number): number;
    static nbitfield1(paramarg0: number, paramarg1: number): void;
    static nerror_resilient_mode(paramarg0: number): number;
    static nerror_resilient_mode(paramarg0: number, paramarg1: number): void;
    static nframe_parallel_decoding_mode(paramarg0: number): number;
    static nframe_parallel_decoding_mode(paramarg0: number, paramarg1: number): void;
    static nintra_only(paramarg0: number): number;
    static nintra_only(paramarg0: number, paramarg1: number): void;
    static nrefresh_frame_context(paramarg0: number): number;
    static nrefresh_frame_context(paramarg0: number, paramarg1: number): void;
    static nreserved(paramarg0: number): number;
    static nreserved(paramarg0: number, paramarg1: number): void;
    static nsegmentation_enabled(paramarg0: number): number;
    static nsegmentation_enabled(paramarg0: number, paramarg1: number): void;
    static nshow_frame(paramarg0: number): number;
    static nshow_frame(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    UsePrevFrameMvs(): boolean;
    UsePrevFrameMvs(arg0: boolean): StdVideoDecodeVP9PictureInfoFlags;
    allow_high_precision_mv(): boolean;
    allow_high_precision_mv(arg0: boolean): StdVideoDecodeVP9PictureInfoFlags;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoDecodeVP9PictureInfoFlags;
    error_resilient_mode(): boolean;
    error_resilient_mode(arg0: boolean): StdVideoDecodeVP9PictureInfoFlags;
    frame_parallel_decoding_mode(): boolean;
    frame_parallel_decoding_mode(arg0: boolean): StdVideoDecodeVP9PictureInfoFlags;
    intra_only(): boolean;
    intra_only(arg0: boolean): StdVideoDecodeVP9PictureInfoFlags;
    refresh_frame_context(): boolean;
    refresh_frame_context(arg0: boolean): StdVideoDecodeVP9PictureInfoFlags;
    segmentation_enabled(): boolean;
    segmentation_enabled(arg0: boolean): StdVideoDecodeVP9PictureInfoFlags;
    set(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean, arg7: boolean): StdVideoDecodeVP9PictureInfoFlags;
    set(arg0: StdVideoDecodeVP9PictureInfoFlags): StdVideoDecodeVP9PictureInfoFlags;
    show_frame(): boolean;
    show_frame(arg0: boolean): StdVideoDecodeVP9PictureInfoFlags;
    sizeof(): number;
}