import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class WGLARBPixelFormat extends Object {
    static WGL_ACCELERATION_ARB: number;
    static WGL_ACCUM_ALPHA_BITS_ARB: number;
    static WGL_ACCUM_BITS_ARB: number;
    static WGL_ACCUM_BLUE_BITS_ARB: number;
    static WGL_ACCUM_GREEN_BITS_ARB: number;
    static WGL_ACCUM_RED_BITS_ARB: number;
    static WGL_ALPHA_BITS_ARB: number;
    static WGL_ALPHA_SHIFT_ARB: number;
    static WGL_AUX_BUFFERS_ARB: number;
    static WGL_BLUE_BITS_ARB: number;
    static WGL_BLUE_SHIFT_ARB: number;
    static WGL_COLOR_BITS_ARB: number;
    static WGL_DEPTH_BITS_ARB: number;
    static WGL_DOUBLE_BUFFER_ARB: number;
    static WGL_DRAW_TO_BITMAP_ARB: number;
    static WGL_DRAW_TO_WINDOW_ARB: number;
    static WGL_FULL_ACCELERATION_ARB: number;
    static WGL_GENERIC_ACCELERATION_ARB: number;
    static WGL_GREEN_BITS_ARB: number;
    static WGL_GREEN_SHIFT_ARB: number;
    static WGL_NEED_PALETTE_ARB: number;
    static WGL_NEED_SYSTEM_PALETTE_ARB: number;
    static WGL_NO_ACCELERATION_ARB: number;
    static WGL_NUMBER_OVERLAYS_ARB: number;
    static WGL_NUMBER_PIXEL_FORMATS_ARB: number;
    static WGL_NUMBER_UNDERLAYS_ARB: number;
    static WGL_PIXEL_TYPE_ARB: number;
    static WGL_RED_BITS_ARB: number;
    static WGL_RED_SHIFT_ARB: number;
    static WGL_SHARE_ACCUM_ARB: number;
    static WGL_SHARE_DEPTH_ARB: number;
    static WGL_SHARE_STENCIL_ARB: number;
    static WGL_STENCIL_BITS_ARB: number;
    static WGL_STEREO_ARB: number;
    static WGL_SUPPORT_GDI_ARB: number;
    static WGL_SUPPORT_OPENGL_ARB: number;
    static WGL_SWAP_COPY_ARB: number;
    static WGL_SWAP_EXCHANGE_ARB: number;
    static WGL_SWAP_LAYER_BUFFERS_ARB: number;
    static WGL_SWAP_METHOD_ARB: number;
    static WGL_SWAP_UNDEFINED_ARB: number;
    static WGL_TRANSPARENT_ALPHA_VALUE_ARB: number;
    static WGL_TRANSPARENT_ARB: number;
    static WGL_TRANSPARENT_BLUE_VALUE_ARB: number;
    static WGL_TRANSPARENT_GREEN_VALUE_ARB: number;
    static WGL_TRANSPARENT_INDEX_VALUE_ARB: number;
    static WGL_TRANSPARENT_RED_VALUE_ARB: number;
    static WGL_TYPE_COLORINDEX_ARB: number;
    static WGL_TYPE_RGBA_ARB: number;
    static nwglChoosePixelFormatARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    static nwglGetPixelFormatAttribfvARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    static nwglGetPixelFormatAttribivARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    static wglChoosePixelFormatARB(paramarg0: number, paramarg1: number[], paramarg2: number[], paramarg3: number[], paramarg4: number[]): boolean;
    static wglChoosePixelFormatARB(paramarg0: number, paramarg1: IntBuffer, paramarg2: FloatBuffer, paramarg3: IntBuffer, paramarg4: IntBuffer): boolean;
    static wglGetPixelFormatAttribfARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: FloatBuffer): boolean;
    static wglGetPixelFormatAttribfvARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[], paramarg4: number[]): boolean;
    static wglGetPixelFormatAttribfvARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer, paramarg4: FloatBuffer): boolean;
    static wglGetPixelFormatAttribiARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: IntBuffer): boolean;
    static wglGetPixelFormatAttribivARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[], paramarg4: number[]): boolean;
    static wglGetPixelFormatAttribivARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer, paramarg4: IntBuffer): boolean;
    constructor()
}