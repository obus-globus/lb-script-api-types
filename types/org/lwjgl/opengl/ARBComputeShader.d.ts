import type { Object } from '../../../java/lang/Object.d.ts'
export class ARBComputeShader extends Object {
    static GL_ATOMIC_COUNTER_BUFFER_REFERENCED_BY_COMPUTE_SHADER: number;
    static GL_COMPUTE_SHADER: number;
    static GL_COMPUTE_SHADER_BIT: number;
    static GL_COMPUTE_WORK_GROUP_SIZE: number;
    static GL_DISPATCH_INDIRECT_BUFFER: number;
    static GL_DISPATCH_INDIRECT_BUFFER_BINDING: number;
    static GL_MAX_COMBINED_COMPUTE_UNIFORM_COMPONENTS: number;
    static GL_MAX_COMPUTE_ATOMIC_COUNTERS: number;
    static GL_MAX_COMPUTE_ATOMIC_COUNTER_BUFFERS: number;
    static GL_MAX_COMPUTE_IMAGE_UNIFORMS: number;
    static GL_MAX_COMPUTE_SHARED_MEMORY_SIZE: number;
    static GL_MAX_COMPUTE_TEXTURE_IMAGE_UNITS: number;
    static GL_MAX_COMPUTE_UNIFORM_BLOCKS: number;
    static GL_MAX_COMPUTE_UNIFORM_COMPONENTS: number;
    static GL_MAX_COMPUTE_WORK_GROUP_COUNT: number;
    static GL_MAX_COMPUTE_WORK_GROUP_INVOCATIONS: number;
    static GL_MAX_COMPUTE_WORK_GROUP_SIZE: number;
    static GL_UNIFORM_BLOCK_REFERENCED_BY_COMPUTE_SHADER: number;
    static glDispatchCompute(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static glDispatchComputeIndirect(paramarg0: number): void;
    constructor()
}