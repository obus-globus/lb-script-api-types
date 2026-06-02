import type { Object } from '../../../java/lang/Object.d.ts'
export class EXTBindableUniform extends Object {
    static GL_MAX_BINDABLE_UNIFORM_SIZE_EXT: number;
    static GL_MAX_FRAGMENT_BINDABLE_UNIFORMS_EXT: number;
    static GL_MAX_GEOMETRY_BINDABLE_UNIFORMS_EXT: number;
    static GL_MAX_VERTEX_BINDABLE_UNIFORMS_EXT: number;
    static GL_UNIFORM_BUFFER_BINDING_EXT: number;
    static GL_UNIFORM_BUFFER_EXT: number;
    static glGetUniformBufferSizeEXT(paramarg0: number, paramarg1: number): number;
    static glGetUniformOffsetEXT(paramarg0: number, paramarg1: number): number;
    static glUniformBufferEXT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    constructor()
}