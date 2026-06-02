import type { EventBinding } from '../../../../../../com/oracle/truffle/api/instrumentation/EventBinding.d.ts'
import type { TruffleInstrument } from '../../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument.d.ts'
import type { TruffleInstrument$Env } from '../../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { OutputHandler } from '../../../../../../com/oracle/truffle/tools/chromeinspector/OutputHandler.d.ts'
import type { OutputHandler$Provider } from '../../../../../../com/oracle/truffle/tools/chromeinspector/OutputHandler$Provider.d.ts'
import type { Enabler } from '../../../../../../com/oracle/truffle/tools/chromeinspector/instrument/Enabler.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
export class OutputConsumerInstrument extends TruffleInstrument implements OutputHandler$Provider, Enabler {
    static ID: string;
    constructor()
    // private bindingErr: EventBinding<OutputStream>;
    // private bindingOut: EventBinding<OutputStream>;
    // private env: TruffleInstrument$Env;
    // private oh: OutputHandler;
    disable(): void;
    enable(): void;
    getOutputHandler(): OutputHandler;
    onCreate(e: TruffleInstrument$Env): void;
    onDispose(e: TruffleInstrument$Env): void;
}