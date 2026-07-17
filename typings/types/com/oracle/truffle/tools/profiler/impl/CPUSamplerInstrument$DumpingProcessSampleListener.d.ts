import type { TruffleContext } from '../../../../../../com/oracle/truffle/api/TruffleContext.d.ts'
import type { TruffleInstrument$Env } from '../../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { CPUSampler$ProcessSampleListener } from '../../../../../../com/oracle/truffle/tools/profiler/CPUSampler$ProcessSampleListener.d.ts'
import type { CPUSamplerInstrument } from '../../../../../../com/oracle/truffle/tools/profiler/impl/CPUSamplerInstrument.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CPUSamplerInstrument$DumpingProcessSampleListener extends Object implements CPUSampler$ProcessSampleListener {
    constructor(null_: CPUSamplerInstrument, env: TruffleInstrument$Env, dumpInterval: number, resetAfterIntervalDump: boolean)
    // private dumpInterval: number;
    // private env: TruffleInstrument$Env;
    // private lastDump: number;
    // private resetAfterIntervalDump: boolean;
    onSampleProcessed(context: TruffleContext): void;
}