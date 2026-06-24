import type { DebugProtocolServerImpl } from '../../../../../../com/oracle/truffle/tools/dap/server/DebugProtocolServerImpl.d.ts'
import type { OutputHandler$Listener } from '../../../../../../com/oracle/truffle/tools/dap/server/OutputHandler$Listener.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DebugProtocolServerImpl$ConsoleOutputListener extends Object implements OutputHandler$Listener {
    constructor(null_: DebugProtocolServerImpl, category: string)
    // private category: string;
    outputText(text: string): void;
}