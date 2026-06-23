import type { TruffleInstrument$Env } from '../../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ProfilerToolFactory<T extends unknown> extends Object{
    create(env: TruffleInstrument$Env): T;
}