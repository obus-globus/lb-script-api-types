import type { TruffleContext } from '../../../../com/oracle/truffle/api/TruffleContext.d.ts'
import type { ThreadsActivationListener } from '../../../../com/oracle/truffle/api/instrumentation/ThreadsActivationListener.d.ts'
import type { SandboxInstrument } from '../../../../com/oracle/truffle/sandbox/SandboxInstrument.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SandboxActivationListener extends Object implements ThreadsActivationListener {
    constructor(instrument: SandboxInstrument)
    // private instrument: SandboxInstrument;
    onEnterThread(context: TruffleContext): void;
    onLeaveThread(context: TruffleContext): void;
}