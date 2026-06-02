import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { STBIRInputCallbackI } from '../../../org/lwjgl/stb/STBIRInputCallbackI.d.ts'
import type { STBIRKernelCallbackI } from '../../../org/lwjgl/stb/STBIRKernelCallbackI.d.ts'
import type { STBIROutputCallbackI } from '../../../org/lwjgl/stb/STBIROutputCallbackI.d.ts'
import type { STBIRSupportCallbackI } from '../../../org/lwjgl/stb/STBIRSupportCallbackI.d.ts'
import type { STBIR_RESIZE } from '../../../org/lwjgl/stb/STBIR_RESIZE.d.ts'
export class STBImageResize extends Object {
    static STBIR_1CHANNEL: number;
    static STBIR_2CHANNEL: number;
    static STBIR_4CHANNEL: number;
    static STBIR_ABGR: number;
    static STBIR_ABGR_NO_AW: number;
    static STBIR_ABGR_PM: number;
    static STBIR_AR: number;
    static STBIR_ARGB: number;
    static STBIR_ARGB_NO_AW: number;
    static STBIR_ARGB_PM: number;
    static STBIR_AR_NO_AW: number;
    static STBIR_AR_PM: number;
    static STBIR_BGR: number;
    static STBIR_BGRA: number;
    static STBIR_BGRA_NO_AW: number;
    static STBIR_BGRA_PM: number;
    static STBIR_EDGE_CLAMP: number;
    static STBIR_EDGE_REFLECT: number;
    static STBIR_EDGE_WRAP: number;
    static STBIR_EDGE_ZERO: number;
    static STBIR_FILTER_BOX: number;
    static STBIR_FILTER_CATMULLROM: number;
    static STBIR_FILTER_CUBICBSPLINE: number;
    static STBIR_FILTER_DEFAULT: number;
    static STBIR_FILTER_MITCHELL: number;
    static STBIR_FILTER_OTHER: number;
    static STBIR_FILTER_POINT_SAMPLE: number;
    static STBIR_FILTER_TRIANGLE: number;
    static STBIR_RA: number;
    static STBIR_RA_NO_AW: number;
    static STBIR_RA_PM: number;
    static STBIR_RGB: number;
    static STBIR_RGBA: number;
    static STBIR_RGBA_NO_AW: number;
    static STBIR_RGBA_PM: number;
    static STBIR_TYPE_FLOAT: number;
    static STBIR_TYPE_HALF_FLOAT: number;
    static STBIR_TYPE_UINT16: number;
    static STBIR_TYPE_UINT8: number;
    static STBIR_TYPE_UINT8_SRGB: number;
    static STBIR_TYPE_UINT8_SRGB_ALPHA: number;
    static nstbir_build_samplers(paramarg0: number): number;
    static nstbir_build_samplers_with_splits(paramarg0: number, paramarg1: number): number;
    static nstbir_free_samplers(paramarg0: number): void;
    static nstbir_resize(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: number, paramarg10: number, paramarg11: number): number;
    static nstbir_resize_extended(paramarg0: number): number;
    static nstbir_resize_extended_split(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nstbir_resize_float_linear(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number): number;
    static nstbir_resize_init(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: number, paramarg10: number): void;
    static nstbir_resize_uint8_linear(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number): number;
    static nstbir_resize_uint8_srgb(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number): number;
    static nstbir_set_buffer_ptrs(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static nstbir_set_datatypes(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nstbir_set_edgemodes(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nstbir_set_filter_callbacks(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static nstbir_set_filters(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nstbir_set_input_subrect(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static nstbir_set_non_pm_alpha_speed_over_quality(paramarg0: number, paramarg1: number): number;
    static nstbir_set_output_pixel_subrect(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static nstbir_set_pixel_callbacks(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nstbir_set_pixel_layouts(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nstbir_set_pixel_subrect(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static nstbir_set_user_data(paramarg0: number, paramarg1: number): void;
    static stbir_build_samplers(paramarg0: STBIR_RESIZE): number;
    static stbir_build_samplers_with_splits(paramarg0: STBIR_RESIZE, paramarg1: number): number;
    static stbir_free_samplers(paramarg0: STBIR_RESIZE): void;
    static stbir_resize(paramarg0: ByteBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: ByteBuffer, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: number, paramarg10: number, paramarg11: number): ByteBuffer;
    static stbir_resize(paramarg0: ByteBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: ByteBuffer, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: number, paramarg10: number, paramarg11: number, paramarg12: number): ByteBuffer;
    static stbir_resize_extended(paramarg0: STBIR_RESIZE): number;
    static stbir_resize_extended_split(paramarg0: STBIR_RESIZE, paramarg1: number, paramarg2: number): number;
    static stbir_resize_float_linear(paramarg0: FloatBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: FloatBuffer, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number): FloatBuffer;
    static stbir_resize_float_linear(paramarg0: FloatBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: FloatBuffer, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: number): FloatBuffer;
    static stbir_resize_init(paramarg0: STBIR_RESIZE, paramarg1: ByteBuffer, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: ByteBuffer, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: number, paramarg10: number): void;
    static stbir_resize_uint8_linear(paramarg0: ByteBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: ByteBuffer, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number): ByteBuffer;
    static stbir_resize_uint8_linear(paramarg0: ByteBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: ByteBuffer, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: number): ByteBuffer;
    static stbir_resize_uint8_srgb(paramarg0: ByteBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: ByteBuffer, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number): ByteBuffer;
    static stbir_resize_uint8_srgb(paramarg0: ByteBuffer, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: ByteBuffer, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: number): ByteBuffer;
    static stbir_set_buffer_ptrs(paramarg0: STBIR_RESIZE, paramarg1: ByteBuffer, paramarg2: number, paramarg3: ByteBuffer, paramarg4: number): void;
    static stbir_set_datatypes(paramarg0: STBIR_RESIZE, paramarg1: number, paramarg2: number): void;
    static stbir_set_edgemodes(paramarg0: STBIR_RESIZE, paramarg1: number, paramarg2: number): number;
    static stbir_set_filter_callbacks(paramarg0: STBIR_RESIZE, paramarg1: (param0: number, param1: number, param2: number) => kotlin.Float, paramarg2: (param0: number, param1: number) => kotlin.Float, paramarg3: (param0: number, param1: number, param2: number) => kotlin.Float, paramarg4: (param0: number, param1: number) => kotlin.Float): number;
    static stbir_set_filters(paramarg0: STBIR_RESIZE, paramarg1: number, paramarg2: number): number;
    static stbir_set_input_subrect(paramarg0: STBIR_RESIZE, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static stbir_set_non_pm_alpha_speed_over_quality(paramarg0: STBIR_RESIZE, paramarg1: boolean): number;
    static stbir_set_output_pixel_subrect(paramarg0: STBIR_RESIZE, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static stbir_set_pixel_callbacks(paramarg0: STBIR_RESIZE, paramarg1: (param0: number, param1: number, param2: number, param3: number, param4: number, param5: number) => void, paramarg2: (param0: number, param1: number, param2: number, param3: number, param4: number) => void): void;
    static stbir_set_pixel_layouts(paramarg0: STBIR_RESIZE, paramarg1: number, paramarg2: number): number;
    static stbir_set_pixel_subrect(paramarg0: STBIR_RESIZE, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static stbir_set_user_data(paramarg0: STBIR_RESIZE, paramarg1: number): void;
    constructor()
}