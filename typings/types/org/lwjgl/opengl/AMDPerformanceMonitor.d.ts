import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class AMDPerformanceMonitor extends Object {
    static GL_COUNTER_RANGE_AMD: number;
    static GL_COUNTER_TYPE_AMD: number;
    static GL_PERCENTAGE_AMD: number;
    static GL_PERFMON_RESULT_AMD: number;
    static GL_PERFMON_RESULT_AVAILABLE_AMD: number;
    static GL_PERFMON_RESULT_SIZE_AMD: number;
    static GL_UNSIGNED_INT64_AMD: number;
    static glBeginPerfMonitorAMD(paramarg0: number): void;
    static glDeletePerfMonitorsAMD(paramarg0: number): void;
    static glDeletePerfMonitorsAMD(paramarg0: number[]): void;
    static glDeletePerfMonitorsAMD(paramarg0: IntBuffer): void;
    static glEndPerfMonitorAMD(paramarg0: number): void;
    static glGenPerfMonitorsAMD(): number;
    static glGenPerfMonitorsAMD(paramarg0: number[]): void;
    static glGenPerfMonitorsAMD(paramarg0: IntBuffer): void;
    static glGetPerfMonitorCounterDataAMD(paramarg0: number, paramarg1: number, paramarg2: number[], paramarg3: number[]): void;
    static glGetPerfMonitorCounterDataAMD(paramarg0: number, paramarg1: number, paramarg2: IntBuffer, paramarg3: IntBuffer): void;
    static glGetPerfMonitorCounterInfoAMD(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): void;
    static glGetPerfMonitorCounterInfoAMD(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): void;
    static glGetPerfMonitorCounterInfoAMD(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: ByteBuffer): void;
    static glGetPerfMonitorCounterInfoAMD(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: FloatBuffer): void;
    static glGetPerfMonitorCounterInfoAMD(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer): void;
    static glGetPerfMonitorCounterStringAMD(paramarg0: number, paramarg1: number, paramarg2: number[], paramarg3: ByteBuffer): void;
    static glGetPerfMonitorCounterStringAMD(paramarg0: number, paramarg1: number, paramarg2: IntBuffer, paramarg3: ByteBuffer): void;
    static glGetPerfMonitorCountersAMD(paramarg0: number, paramarg1: number[], paramarg2: number[], paramarg3: number[]): void;
    static glGetPerfMonitorCountersAMD(paramarg0: number, paramarg1: IntBuffer, paramarg2: IntBuffer, paramarg3: IntBuffer): void;
    static glGetPerfMonitorGroupStringAMD(paramarg0: number, paramarg1: number[], paramarg2: ByteBuffer): void;
    static glGetPerfMonitorGroupStringAMD(paramarg0: number, paramarg1: IntBuffer, paramarg2: ByteBuffer): void;
    static glGetPerfMonitorGroupsAMD(paramarg0: number[], paramarg1: number[]): void;
    static glGetPerfMonitorGroupsAMD(paramarg0: IntBuffer, paramarg1: IntBuffer): void;
    static glSelectPerfMonitorCountersAMD(paramarg0: number, paramarg1: boolean, paramarg2: number, paramarg3: number[]): void;
    static glSelectPerfMonitorCountersAMD(paramarg0: number, paramarg1: boolean, paramarg2: number, paramarg3: IntBuffer): void;
    static nglDeletePerfMonitorsAMD(paramarg0: number, paramarg1: number): void;
    static nglGenPerfMonitorsAMD(paramarg0: number, paramarg1: number): void;
    static nglGetPerfMonitorCounterDataAMD(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static nglGetPerfMonitorCounterInfoAMD(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglGetPerfMonitorCounterStringAMD(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static nglGetPerfMonitorCountersAMD(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static nglGetPerfMonitorGroupStringAMD(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglGetPerfMonitorGroupsAMD(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nglSelectPerfMonitorCountersAMD(paramarg0: number, paramarg1: boolean, paramarg2: number, paramarg3: number, paramarg4: number): void;
    constructor()
}