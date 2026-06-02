import type { Object } from '../../../java/lang/Object.d.ts'
import type { EGLClientPixmapHI } from '../../../org/lwjgl/egl/EGLClientPixmapHI.d.ts'
export class HIClientpixmap extends Object {
    static EGL_CLIENT_PIXMAP_POINTER_HI: number;
    static eglCreatePixmapSurfaceHI(paramarg0: number, paramarg1: number, paramarg2: EGLClientPixmapHI): number;
    static neglCreatePixmapSurfaceHI(paramarg0: number, paramarg1: number, paramarg2: number): number;
    constructor()
}