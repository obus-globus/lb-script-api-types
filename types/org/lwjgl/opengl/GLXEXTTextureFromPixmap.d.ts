import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class GLXEXTTextureFromPixmap extends Object {
    static GLX_AUX0_EXT: number;
    static GLX_AUX1_EXT: number;
    static GLX_AUX2_EXT: number;
    static GLX_AUX3_EXT: number;
    static GLX_AUX4_EXT: number;
    static GLX_AUX5_EXT: number;
    static GLX_AUX6_EXT: number;
    static GLX_AUX7_EXT: number;
    static GLX_AUX8_EXT: number;
    static GLX_AUX9_EXT: number;
    static GLX_BACK_EXT: number;
    static GLX_BACK_LEFT_EXT: number;
    static GLX_BACK_RIGHT_EXT: number;
    static GLX_BIND_TO_MIPMAP_TEXTURE_EXT: number;
    static GLX_BIND_TO_TEXTURE_RGBA_EXT: number;
    static GLX_BIND_TO_TEXTURE_RGB_EXT: number;
    static GLX_BIND_TO_TEXTURE_TARGETS_EXT: number;
    static GLX_FRONT_EXT: number;
    static GLX_FRONT_LEFT_EXT: number;
    static GLX_FRONT_RIGHT_EXT: number;
    static GLX_MIPMAP_TEXTURE_EXT: number;
    static GLX_TEXTURE_1D_BIT_EXT: number;
    static GLX_TEXTURE_1D_EXT: number;
    static GLX_TEXTURE_2D_BIT_EXT: number;
    static GLX_TEXTURE_2D_EXT: number;
    static GLX_TEXTURE_FORMAT_EXT: number;
    static GLX_TEXTURE_FORMAT_NONE_EXT: number;
    static GLX_TEXTURE_FORMAT_RGBA_EXT: number;
    static GLX_TEXTURE_FORMAT_RGB_EXT: number;
    static GLX_TEXTURE_RECTANGLE_BIT_EXT: number;
    static GLX_TEXTURE_RECTANGLE_EXT: number;
    static GLX_TEXTURE_TARGET_EXT: number;
    static GLX_Y_INVERTED_EXT: number;
    static glXBindTexImageEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): void;
    static glXBindTexImageEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer): void;
    static glXReleaseTexImageEXT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglXBindTexImageEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    constructor()
}