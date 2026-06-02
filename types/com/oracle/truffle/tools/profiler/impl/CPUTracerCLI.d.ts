import type { TruffleInstrument$Env } from '../../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { CPUTracer } from '../../../../../../com/oracle/truffle/tools/profiler/CPUTracer.d.ts'
import type { ProfilerCLI } from '../../../../../../com/oracle/truffle/tools/profiler/impl/ProfilerCLI.d.ts'
export class CPUTracerCLI extends ProfilerCLI {
    static UNKNOWN: string;
    static handleOutput(paramenv: TruffleInstrument$Env, paramtracer: CPUTracer, paramabsoluteOutputPath: string): void;
    constructor()
}