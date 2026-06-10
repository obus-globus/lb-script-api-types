import type { AbstractTruffleString } from '../../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TranscodingErrorHandler } from '../../../../../../com/oracle/truffle/api/strings/TranscodingErrorHandler.d.ts'
import type { TranscodingErrorHandler$ReplacementString } from '../../../../../../com/oracle/truffle/api/strings/TranscodingErrorHandler$ReplacementString.d.ts'
import type { TruffleString$Encoding } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { JCodingsProvider$Encoding } from '../../../../../../com/oracle/truffle/api/strings/provider/JCodingsProvider$Encoding.d.ts'
import type { JCodingsProvider$TranscodeResult } from '../../../../../../com/oracle/truffle/api/strings/provider/JCodingsProvider$TranscodeResult.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface JCodingsProvider extends Object {
    get(encodingName: string): JCodingsProvider$Encoding;
    transcode(a: AbstractTruffleString, codePointLengthA: number, byteArrayOffset: number, byteLength: number, targetEncoding: TruffleString$Encoding, jCodingSrc: JCodingsProvider$Encoding, jCodingDst: JCodingsProvider$Encoding, builtinReplacement: number[], errorHandler: (param0: AbstractTruffleString, param1: number, param2: number, param3: TruffleString$Encoding, param4: TruffleString$Encoding) => TranscodingErrorHandler$ReplacementString, asBytesMaterializeNative: (param0: AbstractTruffleString) => number[], getBytesEncoding: (param0: AbstractTruffleString) => JCodingsProvider$Encoding): JCodingsProvider$TranscodeResult;
}