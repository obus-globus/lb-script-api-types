import type { Object } from '../../../java/lang/Object.d.ts'
export class EXTGeometryShader4 extends Object {
    static GL_FRAMEBUFFER_ATTACHMENT_LAYERED_EXT: number;
    static GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER_EXT: number;
    static GL_FRAMEBUFFER_INCOMPLETE_LAYER_COUNT_EXT: number;
    static GL_FRAMEBUFFER_INCOMPLETE_LAYER_TARGETS_EXT: number;
    static GL_GEOMETRY_INPUT_TYPE_EXT: number;
    static GL_GEOMETRY_OUTPUT_TYPE_EXT: number;
    static GL_GEOMETRY_SHADER_EXT: number;
    static GL_GEOMETRY_VERTICES_OUT_EXT: number;
    static GL_LINES_ADJACENCY_EXT: number;
    static GL_LINE_STRIP_ADJACENCY_EXT: number;
    static GL_MAX_GEOMETRY_OUTPUT_VERTICES_EXT: number;
    static GL_MAX_GEOMETRY_TEXTURE_IMAGE_UNITS_EXT: number;
    static GL_MAX_GEOMETRY_TOTAL_OUTPUT_COMPONENTS_EXT: number;
    static GL_MAX_GEOMETRY_UNIFORM_COMPONENTS_EXT: number;
    static GL_MAX_GEOMETRY_VARYING_COMPONENTS_EXT: number;
    static GL_MAX_VARYING_COMPONENTS_EXT: number;
    static GL_MAX_VERTEX_VARYING_COMPONENTS_EXT: number;
    static GL_PROGRAM_POINT_SIZE_EXT: number;
    static GL_TRIANGLES_ADJACENCY_EXT: number;
    static GL_TRIANGLE_STRIP_ADJACENCY_EXT: number;
    static glFramebufferTextureEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static glFramebufferTextureFaceEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static glFramebufferTextureLayerEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static glProgramParameteriEXT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    constructor()
}