import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class INTELPerformanceQuery extends Object {
    static GL_PERFQUERY_COUNTER_DATA_BOOL32_INTEL: number;
    static GL_PERFQUERY_COUNTER_DATA_DOUBLE_INTEL: number;
    static GL_PERFQUERY_COUNTER_DATA_FLOAT_INTEL: number;
    static GL_PERFQUERY_COUNTER_DATA_UINT32_INTEL: number;
    static GL_PERFQUERY_COUNTER_DATA_UINT64_INTEL: number;
    static GL_PERFQUERY_COUNTER_DESC_LENGTH_MAX_INTEL: number;
    static GL_PERFQUERY_COUNTER_DURATION_NORM_INTEL: number;
    static GL_PERFQUERY_COUNTER_DURATION_RAW_INTEL: number;
    static GL_PERFQUERY_COUNTER_EVENT_INTEL: number;
    static GL_PERFQUERY_COUNTER_NAME_LENGTH_MAX_INTEL: number;
    static GL_PERFQUERY_COUNTER_RAW_INTEL: number;
    static GL_PERFQUERY_COUNTER_THROUGHPUT_INTEL: number;
    static GL_PERFQUERY_COUNTER_TIMESTAMP_INTEL: number;
    static GL_PERFQUERY_DONOT_FLUSH_INTEL: number;
    static GL_PERFQUERY_FLUSH_INTEL: number;
    static GL_PERFQUERY_GLOBAL_CONTEXT_INTEL: number;
    static GL_PERFQUERY_GPA_EXTENDED_COUNTERS_INTEL: number;
    static GL_PERFQUERY_QUERY_NAME_LENGTH_MAX_INTEL: number;
    static GL_PERFQUERY_SINGLE_CONTEXT_INTEL: number;
    static GL_PERFQUERY_WAIT_INTEL: number;
    static glBeginPerfQueryINTEL(paramarg0: number): void;
    static glCreatePerfQueryINTEL(paramarg0: number): number;
    static glCreatePerfQueryINTEL(paramarg0: number, paramarg1: number[]): void;
    static glCreatePerfQueryINTEL(paramarg0: number, paramarg1: IntBuffer): void;
    static glDeletePerfQueryINTEL(paramarg0: number): void;
    static glEndPerfQueryINTEL(paramarg0: number): void;
    static glGetFirstPerfQueryIdINTEL(): number;
    static glGetFirstPerfQueryIdINTEL(paramarg0: number[]): void;
    static glGetFirstPerfQueryIdINTEL(paramarg0: IntBuffer): void;
    static glGetNextPerfQueryIdINTEL(paramarg0: number): number;
    static glGetNextPerfQueryIdINTEL(paramarg0: number, paramarg1: number[]): void;
    static glGetNextPerfQueryIdINTEL(paramarg0: number, paramarg1: IntBuffer): void;
    static glGetPerfCounterInfoINTEL(paramarg0: number, paramarg1: number, paramarg2: ByteBuffer, paramarg3: ByteBuffer, paramarg4: number[], paramarg5: number[], paramarg6: number[], paramarg7: number[], paramarg8: number[]): void;
    static glGetPerfCounterInfoINTEL(paramarg0: number, paramarg1: number, paramarg2: ByteBuffer, paramarg3: ByteBuffer, paramarg4: IntBuffer, paramarg5: IntBuffer, paramarg6: IntBuffer, paramarg7: IntBuffer, paramarg8: LongBuffer): void;
    static glGetPerfQueryDataINTEL(paramarg0: number, paramarg1: number, paramarg2: ByteBuffer, paramarg3: number[]): void;
    static glGetPerfQueryDataINTEL(paramarg0: number, paramarg1: number, paramarg2: ByteBuffer, paramarg3: IntBuffer): void;
    static glGetPerfQueryIdByNameINTEL(paramarg0: CharSequence): number;
    static glGetPerfQueryIdByNameINTEL(paramarg0: CharSequence, paramarg1: number[]): void;
    static glGetPerfQueryIdByNameINTEL(paramarg0: CharSequence, paramarg1: IntBuffer): void;
    static glGetPerfQueryIdByNameINTEL(paramarg0: ByteBuffer, paramarg1: number[]): void;
    static glGetPerfQueryIdByNameINTEL(paramarg0: ByteBuffer, paramarg1: IntBuffer): void;
    static glGetPerfQueryInfoINTEL(paramarg0: number, paramarg1: ByteBuffer, paramarg2: number[], paramarg3: number[], paramarg4: number[], paramarg5: number[]): void;
    static glGetPerfQueryInfoINTEL(paramarg0: number, paramarg1: ByteBuffer, paramarg2: IntBuffer, paramarg3: IntBuffer, paramarg4: IntBuffer, paramarg5: IntBuffer): void;
    static nglCreatePerfQueryINTEL(paramarg0: number, paramarg1: number): void;
    static nglGetFirstPerfQueryIdINTEL(paramarg0: number): void;
    static nglGetNextPerfQueryIdINTEL(paramarg0: number, paramarg1: number): void;
    static nglGetPerfCounterInfoINTEL(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number, paramarg9: number, paramarg10: number): void;
    static nglGetPerfQueryDataINTEL(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static nglGetPerfQueryIdByNameINTEL(paramarg0: number, paramarg1: number): void;
    static nglGetPerfQueryInfoINTEL(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): void;
    constructor()
}