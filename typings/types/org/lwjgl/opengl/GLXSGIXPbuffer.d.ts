import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CLongBuffer } from '../../../org/lwjgl/CLongBuffer.d.ts'
export class GLXSGIXPbuffer extends Object {
    static GLX_ACCUM_BUFFER_BIT_SGIX: number;
    static GLX_AUX_BUFFERS_BIT_SGIX: number;
    static GLX_BACK_LEFT_BUFFER_BIT_SGIX: number;
    static GLX_BACK_RIGHT_BUFFER_BIT_SGIX: number;
    static GLX_BUFFER_CLOBBER_MASK_SGIX: number;
    static GLX_DAMAGED_SGIX: number;
    static GLX_DEPTH_BUFFER_BIT_SGIX: number;
    static GLX_EVENT_MASK_SGIX: number;
    static GLX_FRONT_LEFT_BUFFER_BIT_SGIX: number;
    static GLX_FRONT_RIGHT_BUFFER_BIT_SGIX: number;
    static GLX_HEIGHT_SGIX: number;
    static GLX_LARGEST_PBUFFER_SGIX: number;
    static GLX_MAX_PBUFFER_HEIGHT_SGIX: number;
    static GLX_MAX_PBUFFER_PIXELS_SGIX: number;
    static GLX_MAX_PBUFFER_WIDTH_SGIX: number;
    static GLX_OPTIMAL_PBUFFER_HEIGHT_SGIX: number;
    static GLX_OPTIMAL_PBUFFER_WIDTH_SGIX: number;
    static GLX_PBUFFER_BIT_SGIX: number;
    static GLX_PBUFFER_SGIX: number;
    static GLX_PRESERVED_CONTENTS_SGIX: number;
    static GLX_SAMPLE_BUFFERS_BIT_SGIX: number;
    static GLX_SAVED_SGIX: number;
    static GLX_STENCIL_BUFFER_BIT_SGIX: number;
    static GLX_WIDTH_SGIX: number;
    static GLX_WINDOW_SGIX: number;
    static glXCreateGLXPbufferSGIX(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number[]): number;
    static glXCreateGLXPbufferSGIX(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: IntBuffer): number;
    static glXDestroyGLXPbufferSGIX(paramarg0: number, paramarg1: number): void;
    static glXGetSelectedEventSGIX(paramarg0: number, paramarg1: number, paramarg2: CLongBuffer): void;
    static glXQueryGLXPbufferSGIX(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): void;
    static glXQueryGLXPbufferSGIX(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer): void;
    static glXSelectEventSGIX(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglXCreateGLXPbufferSGIX(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static nglXGetSelectedEventSGIX(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglXQueryGLXPbufferSGIX(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    constructor()
}