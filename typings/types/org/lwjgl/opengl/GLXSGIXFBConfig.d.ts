import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { XVisualInfo } from '../../../org/lwjgl/system/linux/XVisualInfo.d.ts'
export class GLXSGIXFBConfig extends Object {
    static GLX_COLOR_INDEX_BIT_SGIX: number;
    static GLX_COLOR_INDEX_TYPE_SGIX: number;
    static GLX_DRAWABLE_TYPE_SGIX: number;
    static GLX_FBCONFIG_ID_SGIX: number;
    static GLX_PIXMAP_BIT_SGIX: number;
    static GLX_RENDER_TYPE_SGIX: number;
    static GLX_RGBA_BIT_SGIX: number;
    static GLX_RGBA_TYPE_SGIX: number;
    static GLX_SCREEN_EXT: number;
    static GLX_WINDOW_BIT_SGIX: number;
    static GLX_X_RENDERABLE_SGIX: number;
    static glXChooseFBConfigSGIX(paramarg0: number, paramarg1: number, paramarg2: number[]): PointerBuffer;
    static glXChooseFBConfigSGIX(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): PointerBuffer;
    static glXCreateContextWithConfigSGIX(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: boolean): number;
    static glXCreateGLXPixmapWithConfigSGIX(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static glXGetFBConfigAttribSGIX(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): number;
    static glXGetFBConfigAttribSGIX(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer): number;
    static glXGetFBConfigFromVisualSGIX(paramarg0: number, paramarg1: XVisualInfo): number;
    static glXGetVisualFromFBConfigSGIX(paramarg0: number, paramarg1: number): XVisualInfo;
    static nglXChooseFBConfigSGIX(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nglXGetFBConfigAttribSGIX(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nglXGetFBConfigFromVisualSGIX(paramarg0: number, paramarg1: number): number;
    static nglXGetVisualFromFBConfigSGIX(paramarg0: number, paramarg1: number): number;
    constructor()
}