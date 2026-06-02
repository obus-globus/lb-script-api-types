import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class WGLARBRenderTexture extends Object {
    static WGL_AUX0_ARB: number;
    static WGL_AUX1_ARB: number;
    static WGL_AUX2_ARB: number;
    static WGL_AUX3_ARB: number;
    static WGL_AUX4_ARB: number;
    static WGL_AUX5_ARB: number;
    static WGL_AUX6_ARB: number;
    static WGL_AUX7_ARB: number;
    static WGL_AUX8_ARB: number;
    static WGL_AUX9_ARB: number;
    static WGL_BACK_LEFT_ARB: number;
    static WGL_BACK_RIGHT_ARB: number;
    static WGL_BIND_TO_TEXTURE_RGBA_ARB: number;
    static WGL_BIND_TO_TEXTURE_RGB_ARB: number;
    static WGL_CUBE_MAP_FACE_ARB: number;
    static WGL_FRONT_LEFT_ARB: number;
    static WGL_FRONT_RIGHT_ARB: number;
    static WGL_MIPMAP_LEVEL_ARB: number;
    static WGL_MIPMAP_TEXTURE_ARB: number;
    static WGL_NO_TEXTURE_ARB: number;
    static WGL_TEXTURE_1D_ARB: number;
    static WGL_TEXTURE_2D_ARB: number;
    static WGL_TEXTURE_CUBE_MAP_ARB: number;
    static WGL_TEXTURE_CUBE_MAP_NEGATIVE_X_ARB: number;
    static WGL_TEXTURE_CUBE_MAP_NEGATIVE_Y_ARB: number;
    static WGL_TEXTURE_CUBE_MAP_NEGATIVE_Z_ARB: number;
    static WGL_TEXTURE_CUBE_MAP_POSITIVE_X_ARB: number;
    static WGL_TEXTURE_CUBE_MAP_POSITIVE_Y_ARB: number;
    static WGL_TEXTURE_CUBE_MAP_POSITIVE_Z_ARB: number;
    static WGL_TEXTURE_FORMAT_ARB: number;
    static WGL_TEXTURE_RGBA_ARB: number;
    static WGL_TEXTURE_RGB_ARB: number;
    static WGL_TEXTURE_TARGET_ARB: number;
    static nwglSetPbufferAttribARB(paramarg0: number, paramarg1: number): number;
    static wglBindTexImageARB(paramarg0: number, paramarg1: number): boolean;
    static wglReleaseTexImageARB(paramarg0: number, paramarg1: number): boolean;
    static wglSetPbufferAttribARB(paramarg0: number, paramarg1: number[]): boolean;
    static wglSetPbufferAttribARB(paramarg0: number, paramarg1: IntBuffer): boolean;
    constructor()
}