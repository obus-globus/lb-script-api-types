import type { OutputHandler$ListeneableOutputStream } from '../../../../../../com/oracle/truffle/tools/dap/server/OutputHandler$ListeneableOutputStream.d.ts'
import type { OutputHandler$Listener } from '../../../../../../com/oracle/truffle/tools/dap/server/OutputHandler$Listener.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class OutputHandler extends Object {
    constructor()
    readonly err: OutputHandler$ListeneableOutputStream;
    readonly out: OutputHandler$ListeneableOutputStream;
    getErr(): OutputStream;
    getOut(): OutputStream;
    setErrListener(l: OutputHandler$Listener): void;
    setOutListener(l: OutputHandler$Listener): void;
}