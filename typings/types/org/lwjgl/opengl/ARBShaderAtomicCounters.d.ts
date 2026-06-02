import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ARBShaderAtomicCounters extends Object {
    static GL_ACTIVE_ATOMIC_COUNTER_BUFFERS: number;
    static GL_ATOMIC_COUNTER_BUFFER: number;
    static GL_ATOMIC_COUNTER_BUFFER_ACTIVE_ATOMIC_COUNTERS: number;
    static GL_ATOMIC_COUNTER_BUFFER_ACTIVE_ATOMIC_COUNTER_INDICES: number;
    static GL_ATOMIC_COUNTER_BUFFER_BINDING: number;
    static GL_ATOMIC_COUNTER_BUFFER_DATA_SIZE: number;
    static GL_ATOMIC_COUNTER_BUFFER_REFERENCED_BY_FRAGMENT_SHADER: number;
    static GL_ATOMIC_COUNTER_BUFFER_REFERENCED_BY_GEOMETRY_SHADER: number;
    static GL_ATOMIC_COUNTER_BUFFER_REFERENCED_BY_TESS_CONTROL_SHADER: number;
    static GL_ATOMIC_COUNTER_BUFFER_REFERENCED_BY_TESS_EVALUATION_SHADER: number;
    static GL_ATOMIC_COUNTER_BUFFER_REFERENCED_BY_VERTEX_SHADER: number;
    static GL_ATOMIC_COUNTER_BUFFER_SIZE: number;
    static GL_ATOMIC_COUNTER_BUFFER_START: number;
    static GL_MAX_ATOMIC_COUNTER_BUFFER_BINDINGS: number;
    static GL_MAX_ATOMIC_COUNTER_BUFFER_SIZE: number;
    static GL_MAX_COMBINED_ATOMIC_COUNTERS: number;
    static GL_MAX_COMBINED_ATOMIC_COUNTER_BUFFERS: number;
    static GL_MAX_FRAGMENT_ATOMIC_COUNTERS: number;
    static GL_MAX_FRAGMENT_ATOMIC_COUNTER_BUFFERS: number;
    static GL_MAX_GEOMETRY_ATOMIC_COUNTERS: number;
    static GL_MAX_GEOMETRY_ATOMIC_COUNTER_BUFFERS: number;
    static GL_MAX_TESS_CONTROL_ATOMIC_COUNTERS: number;
    static GL_MAX_TESS_CONTROL_ATOMIC_COUNTER_BUFFERS: number;
    static GL_MAX_TESS_EVALUATION_ATOMIC_COUNTERS: number;
    static GL_MAX_TESS_EVALUATION_ATOMIC_COUNTER_BUFFERS: number;
    static GL_MAX_VERTEX_ATOMIC_COUNTERS: number;
    static GL_MAX_VERTEX_ATOMIC_COUNTER_BUFFERS: number;
    static GL_UNIFORM_ATOMIC_COUNTER_BUFFER_INDEX: number;
    static GL_UNSIGNED_INT_ATOMIC_COUNTER: number;
    static glGetActiveAtomicCounterBufferi(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static glGetActiveAtomicCounterBufferiv(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): void;
    static glGetActiveAtomicCounterBufferiv(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer): void;
    static nglGetActiveAtomicCounterBufferiv(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    constructor()
}