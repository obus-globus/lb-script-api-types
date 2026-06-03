import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MutableTruffleString extends AbstractTruffleString {
    static fromByteArrayUncached(paramvalue: number[], parambyteOffset: number, parambyteLength: number, paramencoding: TruffleString$Encoding, paramcopy: boolean): MutableTruffleString;
    static fromNativePointerUncached(parampointerObject: Object, parambyteOffset: number, parambyteLength: number, paramencoding: TruffleString$Encoding, paramcopy: boolean): MutableTruffleString;
    private constructor(data: Object, offset: number, length: number, stride: number, codePointLength: number, encoding: TruffleString$Encoding)
    concatUncached(b: AbstractTruffleString, expectedEncoding: TruffleString$Encoding): MutableTruffleString;
    concatUncached(b: AbstractTruffleString, expectedEncoding: TruffleString$Encoding, lazy: boolean): TruffleString;
    invalidateCachedAttributes(): void;
    notifyExternalMutation(): void;
    substringByteIndexUncached(byteOffset: number, byteLength: number, expectedEncoding: TruffleString$Encoding): MutableTruffleString;
    substringByteIndexUncached(fromByteIndex: number, byteLength: number, expectedEncoding: TruffleString$Encoding, lazy: boolean): TruffleString;
    substringUncached(byteOffset: number, byteLength: number, expectedEncoding: TruffleString$Encoding): MutableTruffleString;
    substringUncached(fromIndex: number, substringLength: number, expectedEncoding: TruffleString$Encoding, lazy: boolean): TruffleString;
    writeByteUncached(byteIndex: number, value: number, expectedEncoding: TruffleString$Encoding): void;
}