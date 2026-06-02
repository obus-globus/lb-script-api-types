import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { MutableTruffleString } from '../../../../../com/oracle/truffle/api/strings/MutableTruffleString.d.ts'
import type { MutableTruffleString$SwitchEncodingNode } from '../../../../../com/oracle/truffle/api/strings/MutableTruffleString$SwitchEncodingNode.d.ts'
import type { MutableTruffleStringFactory$SwitchEncodingNodeGen$TranscodeAndCopyData } from '../../../../../com/oracle/truffle/api/strings/MutableTruffleStringFactory$SwitchEncodingNodeGen$TranscodeAndCopyData.d.ts'
import type { TranscodingErrorHandler } from '../../../../../com/oracle/truffle/api/strings/TranscodingErrorHandler.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export class MutableTruffleStringFactory$SwitchEncodingNodeGen extends MutableTruffleString$SwitchEncodingNode {
    static create(): MutableTruffleString$SwitchEncodingNode;
    static getUncached(): MutableTruffleString$SwitchEncodingNode;
    private constructor()
    // private state_0_: number;
    // private transcodeAndCopy_cache: MutableTruffleStringFactory$SwitchEncodingNodeGen$TranscodeAndCopyData;
    execute(arg0Value: AbstractTruffleString, arg1Value: TruffleString$Encoding, arg2Value: (param0: AbstractTruffleString, param1: number, param2: number, param3: TruffleString$Encoding, param4: TruffleString$Encoding) => com.oracle.truffle.api.strings.TranscodingErrorHandler.ReplacementString): MutableTruffleString;
    // private executeAndSpecialize(arg0Value: AbstractTruffleString, arg1Value: TruffleString$Encoding, arg2Value: (param0: AbstractTruffleString, param1: number, param2: number, param3: TruffleString$Encoding, param4: TruffleString$Encoding) => com.oracle.truffle.api.strings.TranscodingErrorHandler.ReplacementString): MutableTruffleString;
}