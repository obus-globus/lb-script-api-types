import type { OutputHandler } from '../../../../../../com/oracle/truffle/tools/dap/server/OutputHandler.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface OutputHandler$Provider extends Object{
    getOutputHandler(): OutputHandler;
}