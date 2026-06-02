import type { Object } from '../../../java/lang/Object.d.ts'
export class ARBGeometryShader4 extends Object {
    static GL_FRAMEBUFFER_ATTACHMENT_LAYERED_ARB: number;
    static GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: number;
    static GL_FRAMEBUFFER_INCOMPLETE_LAYER_COUNT_ARB: number;
    static GL_FRAMEBUFFER_INCOMPLETE_LAYER_TARGETS_ARB: number;
    static GL_GEOMETRY_INPUT_TYPE_ARB: number;
    static GL_GEOMETRY_OUTPUT_TYPE_ARB: number;
    static GL_GEOMETRY_SHADER_ARB: number;
    static GL_GEOMETRY_VERTICES_OUT_ARB: number;
    static GL_LINES_ADJACENCY_ARB: number;
    static GL_LINE_STRIP_ADJACENCY_ARB: number;
    static GL_MAX_GEOMETRY_OUTPUT_VERTICES_ARB: number;
    static GL_MAX_GEOMETRY_TEXTURE_IMAGE_UNITS_ARB: number;
    static GL_MAX_GEOMETRY_TOTAL_OUTPUT_COMPONENTS_ARB: number;
    static GL_MAX_GEOMETRY_UNIFORM_COMPONENTS_ARB: number;
    static GL_MAX_GEOMETRY_VARYING_COMPONENTS_ARB: number;
    static GL_MAX_VERTEX_VARYING_COMPONENTS_ARB: number;
    static GL_PROGRAM_POINT_SIZE_ARB: number;
    static GL_TRIANGLES_ADJACENCY_ARB: number;
    static GL_TRIANGLE_STRIP_ADJACENCY_ARB: number;
    static glFramebufferTextureARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static glFramebufferTextureFaceARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static glFramebufferTextureLayerARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static glProgramParameteriARB(paramarg0: number, paramarg1: number, paramarg2: number): void;
    constructor()
}