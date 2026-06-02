import type { OutputHandler } from '../../../../../com/oracle/truffle/tools/chromeinspector/OutputHandler.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface OutputHandler$Provider extends Object{
    getOutputHandler(): OutputHandler;
}