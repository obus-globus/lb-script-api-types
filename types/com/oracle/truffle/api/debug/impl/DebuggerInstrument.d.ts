import type { DebuggerInstrument$DebuggerFactory } from '../../../../../../com/oracle/truffle/api/debug/impl/DebuggerInstrument$DebuggerFactory.d.ts'
import type { TruffleInstrument } from '../../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument.d.ts'
import type { TruffleInstrument$Env } from '../../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
export class DebuggerInstrument extends TruffleInstrument {
    static setFactory(paramfactory: DebuggerInstrument$DebuggerFactory): void;
    constructor()
    onCreate(env: TruffleInstrument$Env): void;
}