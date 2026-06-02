import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TranscodingErrorHandler } from '../../../../../com/oracle/truffle/api/strings/TranscodingErrorHandler.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$InternalSwitchEncodingNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$InternalSwitchEncodingNode.d.ts'
export abstract class TruffleString$SwitchEncodingNode extends AbstractPublicNode {
    static create(): TruffleString$SwitchEncodingNode;
    static getUncached(): TruffleString$SwitchEncodingNode;
    constructor()
    execute(a: AbstractTruffleString, encoding: TruffleString$Encoding): TruffleString;
    execute(a: AbstractTruffleString, encoding: TruffleString$Encoding, errorHandler: (param0: AbstractTruffleString, param1: number, param2: number, param3: TruffleString$Encoding, param4: TruffleString$Encoding) => com.oracle.truffle.api.strings.TranscodingErrorHandler.ReplacementString): TruffleString;
    switchEncoding(a: AbstractTruffleString, encoding: TruffleString$Encoding, errorHandler: (param0: AbstractTruffleString, param1: number, param2: number, param3: TruffleString$Encoding, param4: TruffleString$Encoding) => com.oracle.truffle.api.strings.TranscodingErrorHandler.ReplacementString, internalNode: TruffleString$InternalSwitchEncodingNode): TruffleString;
}