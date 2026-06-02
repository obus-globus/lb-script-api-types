import type { TruffleInstrument } from '../../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument.d.ts'
import type { TruffleInstrument$Env } from '../../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { InspectorInstrument$Server } from '../../../../../../com/oracle/truffle/tools/chromeinspector/instrument/InspectorInstrument$Server.d.ts'
import type { ConnectionWatcher } from '../../../../../../com/oracle/truffle/tools/chromeinspector/server/ConnectionWatcher.d.ts'
import type { OptionDescriptor } from '../../../../../../org/graalvm/options/OptionDescriptor.d.ts'
export class InspectorInstrument extends TruffleInstrument {
    static INSTRUMENT_ID: string;
    constructor()
    // private connectionWatcher: ConnectionWatcher;
    // private server: InspectorInstrument$Server;
    getOptionDescriptors(): OptionDescriptor[];
    onCreate(env: TruffleInstrument$Env): void;
    onFinalize(env: TruffleInstrument$Env): void;
}