import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class WGL extends Object {
    static WGL_FONT_LINES: number;
    static WGL_FONT_POLYGONS: number;
    static WGL_SWAP_MAIN_PLANE: number;
    static WGL_SWAP_OVERLAY1: number;
    static WGL_SWAP_OVERLAY10: number;
    static WGL_SWAP_OVERLAY11: number;
    static WGL_SWAP_OVERLAY12: number;
    static WGL_SWAP_OVERLAY13: number;
    static WGL_SWAP_OVERLAY14: number;
    static WGL_SWAP_OVERLAY15: number;
    static WGL_SWAP_OVERLAY2: number;
    static WGL_SWAP_OVERLAY3: number;
    static WGL_SWAP_OVERLAY4: number;
    static WGL_SWAP_OVERLAY5: number;
    static WGL_SWAP_OVERLAY6: number;
    static WGL_SWAP_OVERLAY7: number;
    static WGL_SWAP_OVERLAY8: number;
    static WGL_SWAP_OVERLAY9: number;
    static WGL_SWAP_UNDERLAY1: number;
    static WGL_SWAP_UNDERLAY10: number;
    static WGL_SWAP_UNDERLAY11: number;
    static WGL_SWAP_UNDERLAY12: number;
    static WGL_SWAP_UNDERLAY13: number;
    static WGL_SWAP_UNDERLAY14: number;
    static WGL_SWAP_UNDERLAY15: number;
    static WGL_SWAP_UNDERLAY2: number;
    static WGL_SWAP_UNDERLAY3: number;
    static WGL_SWAP_UNDERLAY4: number;
    static WGL_SWAP_UNDERLAY5: number;
    static WGL_SWAP_UNDERLAY6: number;
    static WGL_SWAP_UNDERLAY7: number;
    static WGL_SWAP_UNDERLAY8: number;
    static WGL_SWAP_UNDERLAY9: number;
    static nwglCopyContext(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nwglCopyContext(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static nwglCreateContext(paramarg0: number, paramarg1: number): number;
    static nwglCreateContext(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nwglCreateLayerContext(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nwglCreateLayerContext(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nwglDeleteContext(paramarg0: number, paramarg1: number): number;
    static nwglDeleteContext(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nwglGetCurrentContext(paramarg0: number): number;
    static nwglGetCurrentContext(paramarg0: number, paramarg1: number): number;
    static nwglGetProcAddress(paramarg0: number, paramarg1: number): number;
    static nwglGetProcAddress(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nwglMakeCurrent(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nwglMakeCurrent(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nwglShareLists(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static nwglShareLists(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static wglCopyContext(paramarg0: IntBuffer, paramarg1: number, paramarg2: number, paramarg3: number): boolean;
    static wglCreateContext(paramarg0: IntBuffer, paramarg1: number): number;
    static wglCreateLayerContext(paramarg0: IntBuffer, paramarg1: number, paramarg2: number): number;
    static wglDeleteContext(paramarg0: IntBuffer, paramarg1: number): boolean;
    static wglGetCurrentContext(paramarg0: IntBuffer): number;
    static wglGetCurrentDC(): number;
    static wglGetProcAddress(paramarg0: IntBuffer, paramarg1: CharSequence): number;
    static wglGetProcAddress(paramarg0: IntBuffer, paramarg1: ByteBuffer): number;
    static wglMakeCurrent(paramarg0: IntBuffer, paramarg1: number, paramarg2: number): boolean;
    static wglShareLists(paramarg0: IntBuffer, paramarg1: number, paramarg2: number): boolean;
    constructor()
}