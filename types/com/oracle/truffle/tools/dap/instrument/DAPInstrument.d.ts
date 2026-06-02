import type { TruffleInstrument } from '../../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument.d.ts'
import type { TruffleInstrument$Env } from '../../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { DebugProtocolServerImpl } from '../../../../../../com/oracle/truffle/tools/dap/server/DebugProtocolServerImpl.d.ts'
import type { PrintWriter } from '../../../../../../java/io/PrintWriter.d.ts'
import type { OptionDescriptor } from '../../../../../../org/graalvm/options/OptionDescriptor.d.ts'
import type { OptionValues } from '../../../../../../org/graalvm/options/OptionValues.d.ts'
export class DAPInstrument extends TruffleInstrument {
    static ID: string;
    constructor()
    // private dapServer: DebugProtocolServerImpl;
    // private options: OptionValues;
    getOptionDescriptors(): OptionDescriptor[];
    // private launchServer(env: TruffleInstrument$Env, info: PrintWriter, err: PrintWriter): void;
    onCreate(env: TruffleInstrument$Env): void;
    onFinalize(env: TruffleInstrument$Env): void;
}