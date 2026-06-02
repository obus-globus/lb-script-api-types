import type { DebugProtocolServer$ExceptionWithMessage } from '../../../../../../com/oracle/truffle/tools/dap/types/DebugProtocolServer$ExceptionWithMessage.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Errors extends Object {
    static errorFromEvaluate(paramerrMsg: string): DebugProtocolServer$ExceptionWithMessage;
    static invalidThread(paramthreadId: number): DebugProtocolServer$ExceptionWithMessage;
    static noCallStackAvailable(): DebugProtocolServer$ExceptionWithMessage;
    static noStoredException(): DebugProtocolServer$ExceptionWithMessage;
    static setValueNotSupported(): DebugProtocolServer$ExceptionWithMessage;
    static sourceRequestCouldNotRetrieveContent(): DebugProtocolServer$ExceptionWithMessage;
    static sourceRequestIllegalHandle(): DebugProtocolServer$ExceptionWithMessage;
    static stackFrameNotValid(): DebugProtocolServer$ExceptionWithMessage;
    constructor()
}