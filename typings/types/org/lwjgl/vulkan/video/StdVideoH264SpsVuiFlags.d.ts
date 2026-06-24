import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class StdVideoH264SpsVuiFlags extends Struct<StdVideoH264SpsVuiFlags> implements NativeResource {
    static ALIGNOF: number;
    static BITFIELD0: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): StdVideoH264SpsVuiFlags;
    static calloc(paramarg0: MemoryStack): StdVideoH264SpsVuiFlags;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoH264SpsVuiFlags;
    static create(paramarg0: number): StdVideoH264SpsVuiFlags;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoH264SpsVuiFlags;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoH264SpsVuiFlags;
    static malloc(paramarg0: MemoryStack): StdVideoH264SpsVuiFlags;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static naspect_ratio_info_present_flag(paramarg0: number): number;
    static naspect_ratio_info_present_flag(paramarg0: number, paramarg1: number): void;
    static nbitfield0(paramarg0: number): number;
    static nbitfield0(paramarg0: number, paramarg1: number): void;
    static nbitstream_restriction_flag(paramarg0: number): number;
    static nbitstream_restriction_flag(paramarg0: number, paramarg1: number): void;
    static nchroma_loc_info_present_flag(paramarg0: number): number;
    static nchroma_loc_info_present_flag(paramarg0: number, paramarg1: number): void;
    static ncolor_description_present_flag(paramarg0: number): number;
    static ncolor_description_present_flag(paramarg0: number, paramarg1: number): void;
    static nfixed_frame_rate_flag(paramarg0: number): number;
    static nfixed_frame_rate_flag(paramarg0: number, paramarg1: number): void;
    static nnal_hrd_parameters_present_flag(paramarg0: number): number;
    static nnal_hrd_parameters_present_flag(paramarg0: number, paramarg1: number): void;
    static noverscan_appropriate_flag(paramarg0: number): number;
    static noverscan_appropriate_flag(paramarg0: number, paramarg1: number): void;
    static noverscan_info_present_flag(paramarg0: number): number;
    static noverscan_info_present_flag(paramarg0: number, paramarg1: number): void;
    static ntiming_info_present_flag(paramarg0: number): number;
    static ntiming_info_present_flag(paramarg0: number, paramarg1: number): void;
    static nvcl_hrd_parameters_present_flag(paramarg0: number): number;
    static nvcl_hrd_parameters_present_flag(paramarg0: number, paramarg1: number): void;
    static nvideo_full_range_flag(paramarg0: number): number;
    static nvideo_full_range_flag(paramarg0: number, paramarg1: number): void;
    static nvideo_signal_type_present_flag(paramarg0: number): number;
    static nvideo_signal_type_present_flag(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    aspect_ratio_info_present_flag(): boolean;
    aspect_ratio_info_present_flag(arg0: boolean): StdVideoH264SpsVuiFlags;
    bitstream_restriction_flag(): boolean;
    bitstream_restriction_flag(arg0: boolean): StdVideoH264SpsVuiFlags;
    chroma_loc_info_present_flag(): boolean;
    chroma_loc_info_present_flag(arg0: boolean): StdVideoH264SpsVuiFlags;
    close(): void;
    color_description_present_flag(): boolean;
    color_description_present_flag(arg0: boolean): StdVideoH264SpsVuiFlags;
    create(arg0: number, arg1: ByteBuffer): StdVideoH264SpsVuiFlags;
    fixed_frame_rate_flag(): boolean;
    fixed_frame_rate_flag(arg0: boolean): StdVideoH264SpsVuiFlags;
    nal_hrd_parameters_present_flag(): boolean;
    nal_hrd_parameters_present_flag(arg0: boolean): StdVideoH264SpsVuiFlags;
    overscan_appropriate_flag(): boolean;
    overscan_appropriate_flag(arg0: boolean): StdVideoH264SpsVuiFlags;
    overscan_info_present_flag(): boolean;
    overscan_info_present_flag(arg0: boolean): StdVideoH264SpsVuiFlags;
    set(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean, arg7: boolean, arg8: boolean, arg9: boolean, arg10: boolean, arg11: boolean): StdVideoH264SpsVuiFlags;
    set(arg0: StdVideoH264SpsVuiFlags): StdVideoH264SpsVuiFlags;
    sizeof(): number;
    timing_info_present_flag(): boolean;
    timing_info_present_flag(arg0: boolean): StdVideoH264SpsVuiFlags;
    vcl_hrd_parameters_present_flag(): boolean;
    vcl_hrd_parameters_present_flag(arg0: boolean): StdVideoH264SpsVuiFlags;
    video_full_range_flag(): boolean;
    video_full_range_flag(arg0: boolean): StdVideoH264SpsVuiFlags;
    video_signal_type_present_flag(): boolean;
    video_signal_type_present_flag(arg0: boolean): StdVideoH264SpsVuiFlags;
}