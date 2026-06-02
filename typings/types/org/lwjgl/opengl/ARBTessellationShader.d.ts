import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ARBTessellationShader extends Object {
    static GL_FRACTIONAL_EVEN: number;
    static GL_FRACTIONAL_ODD: number;
    static GL_ISOLINES: number;
    static GL_MAX_COMBINED_TESS_CONTROL_UNIFORM_COMPONENTS: number;
    static GL_MAX_COMBINED_TESS_EVALUATION_UNIFORM_COMPONENTS: number;
    static GL_MAX_PATCH_VERTICES: number;
    static GL_MAX_TESS_CONTROL_INPUT_COMPONENTS: number;
    static GL_MAX_TESS_CONTROL_OUTPUT_COMPONENTS: number;
    static GL_MAX_TESS_CONTROL_TEXTURE_IMAGE_UNITS: number;
    static GL_MAX_TESS_CONTROL_TOTAL_OUTPUT_COMPONENTS: number;
    static GL_MAX_TESS_CONTROL_UNIFORM_BLOCKS: number;
    static GL_MAX_TESS_CONTROL_UNIFORM_COMPONENTS: number;
    static GL_MAX_TESS_EVALUATION_INPUT_COMPONENTS: number;
    static GL_MAX_TESS_EVALUATION_OUTPUT_COMPONENTS: number;
    static GL_MAX_TESS_EVALUATION_TEXTURE_IMAGE_UNITS: number;
    static GL_MAX_TESS_EVALUATION_UNIFORM_BLOCKS: number;
    static GL_MAX_TESS_EVALUATION_UNIFORM_COMPONENTS: number;
    static GL_MAX_TESS_GEN_LEVEL: number;
    static GL_MAX_TESS_PATCH_COMPONENTS: number;
    static GL_PATCHES: number;
    static GL_PATCH_DEFAULT_INNER_LEVEL: number;
    static GL_PATCH_DEFAULT_OUTER_LEVEL: number;
    static GL_PATCH_VERTICES: number;
    static GL_TESS_CONTROL_OUTPUT_VERTICES: number;
    static GL_TESS_CONTROL_SHADER: number;
    static GL_TESS_EVALUATION_SHADER: number;
    static GL_TESS_GEN_MODE: number;
    static GL_TESS_GEN_POINT_MODE: number;
    static GL_TESS_GEN_SPACING: number;
    static GL_TESS_GEN_VERTEX_ORDER: number;
    static GL_UNIFORM_BLOCK_REFERENCED_BY_TESS_CONTROL_SHADER: number;
    static GL_UNIFORM_BLOCK_REFERENCED_BY_TESS_EVALUATION_SHADER: number;
    static glPatchParameterfv(paramarg0: number, paramarg1: number[]): void;
    static glPatchParameterfv(paramarg0: number, paramarg1: FloatBuffer): void;
    static glPatchParameteri(paramarg0: number, paramarg1: number): void;
    static nglPatchParameterfv(paramarg0: number, paramarg1: number): void;
    constructor()
}