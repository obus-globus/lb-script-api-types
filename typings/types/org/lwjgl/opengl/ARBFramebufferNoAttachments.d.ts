import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ARBFramebufferNoAttachments extends Object {
    static GL_FRAMEBUFFER_DEFAULT_FIXED_SAMPLE_LOCATIONS: number;
    static GL_FRAMEBUFFER_DEFAULT_HEIGHT: number;
    static GL_FRAMEBUFFER_DEFAULT_LAYERS: number;
    static GL_FRAMEBUFFER_DEFAULT_SAMPLES: number;
    static GL_FRAMEBUFFER_DEFAULT_WIDTH: number;
    static GL_MAX_FRAMEBUFFER_HEIGHT: number;
    static GL_MAX_FRAMEBUFFER_LAYERS: number;
    static GL_MAX_FRAMEBUFFER_SAMPLES: number;
    static GL_MAX_FRAMEBUFFER_WIDTH: number;
    static glFramebufferParameteri(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glGetFramebufferParameteri(paramarg0: number, paramarg1: number): number;
    static glGetFramebufferParameteriv(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glGetFramebufferParameteriv(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): void;
    static glGetNamedFramebufferParameteriEXT(paramarg0: number, paramarg1: number): number;
    static glGetNamedFramebufferParameterivEXT(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static glGetNamedFramebufferParameterivEXT(paramarg0: number, paramarg1: number, paramarg2: IntBuffer): void;
    static glNamedFramebufferParameteriEXT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglGetFramebufferParameteriv(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglGetNamedFramebufferParameterivEXT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    constructor()
}