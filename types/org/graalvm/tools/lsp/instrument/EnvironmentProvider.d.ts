import type { TruffleInstrument$Env } from '../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface EnvironmentProvider extends Object{
    getEnvironment(): TruffleInstrument$Env;
}