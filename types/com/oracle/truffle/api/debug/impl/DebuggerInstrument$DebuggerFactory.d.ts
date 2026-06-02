import type { Debugger } from '../../../../../../com/oracle/truffle/api/debug/Debugger.d.ts'
import type { TruffleInstrument$Env } from '../../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface DebuggerInstrument$DebuggerFactory extends Object{
    create(env: TruffleInstrument$Env): Debugger;
}