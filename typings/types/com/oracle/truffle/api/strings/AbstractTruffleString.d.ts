import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { InternalByteArray } from '../../../../../com/oracle/truffle/api/strings/InternalByteArray.d.ts'
import type { MutableTruffleString } from '../../../../../com/oracle/truffle/api/strings/MutableTruffleString.d.ts'
import type { TranscodingErrorHandler } from '../../../../../com/oracle/truffle/api/strings/TranscodingErrorHandler.d.ts'
import type { TranscodingErrorHandler$ReplacementString } from '../../../../../com/oracle/truffle/api/strings/TranscodingErrorHandler$ReplacementString.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$CodeRange } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CodeRange.d.ts'
import type { TruffleString$CompactionLevel } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CompactionLevel.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$ErrorHandling } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ErrorHandling.d.ts'
import type { TruffleString$WithMask } from '../../../../../com/oracle/truffle/api/strings/TruffleString$WithMask.d.ts'
import type { TruffleStringIterator } from '../../../../../com/oracle/truffle/api/strings/TruffleStringIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractTruffleString extends Object {
    constructor(data: Object, offset: number, length: number, stride: number, encoding: TruffleString$Encoding, flags: number, codePointLength: number, codeRange: number, hashCode: number)
    // private codePointLength: number;
    // private codeRange: number;
    // private data: Object;
    // private encoding: number;
    // private flags: number;
    // private hashCode: number;
    // private length: number;
    // private offset: number;
    // private stride: number;
    asManagedMutableTruffleStringUncached(expectedEncoding: TruffleString$Encoding): MutableTruffleString;
    asManagedTruffleStringUncached(expectedEncoding: TruffleString$Encoding): TruffleString;
    asManagedTruffleStringUncached(expectedEncoding: TruffleString$Encoding, cacheResult: boolean): TruffleString;
    asMutableTruffleStringUncached(expectedEncoding: TruffleString$Encoding): MutableTruffleString;
    asTruffleStringUncached(expectedEncoding: TruffleString$Encoding): TruffleString;
    boundsCheck(node: Node, arrayA: number[], offsetA: number, index: number, expectedEncoding: TruffleString$Encoding, calcCodePointLengthProfile: InlinedConditionProfile): void;
    boundsCheck(node: Node, arrayA: number[], offsetA: number, fromIndex: number, toIndex: number, expectedEncoding: TruffleString$Encoding, calcCodePointLengthProfile: InlinedConditionProfile): void;
    boundsCheckRegion(node: Node, arrayA: number[], offsetA: number, fromIndex: number, regionLength: number, expectedEncoding: TruffleString$Encoding, calcCodePointLengthProfile: InlinedConditionProfile): void;
    byteArrayOffset(): number;
    byteIndexOfAnyByteUncached(fromByteIndex: number, maxByteIndex: number, values: number[], expectedEncoding: TruffleString$Encoding): number;
    byteIndexOfCodePointUncached(cp: number, fromIndex: number, toIndex: number, expectedEncoding: TruffleString$Encoding): number;
    byteIndexOfStringUncached(b: AbstractTruffleString, fromIndex: number, toIndex: number, expectedEncoding: TruffleString$Encoding): number;
    byteIndexOfStringUncached(b: TruffleString$WithMask, fromIndex: number, toIndex: number, expectedEncoding: TruffleString$Encoding): number;
    byteIndexToCodePointIndexUncached(byteOffset: number, byteIndex: number, expectedEncoding: TruffleString$Encoding): number;
    byteLength(expectedEncoding: TruffleString$Encoding): number;
    byteLengthOfCodePointUncached(byteIndex: number, expectedEncoding: TruffleString$Encoding): number;
    byteLengthOfCodePointUncached(byteIndex: number, expectedEncoding: TruffleString$Encoding, errorHandling: TruffleString$ErrorHandling): number;
    charIndexOfAnyCharUTF16Uncached(fromCharIndex: number, maxCharIndex: number, values: string[]): number;
    checkEncoding(expectedEncoding: TruffleString$Encoding): void;
    codePointAtByteIndexUncached(i: number, expectedEncoding: TruffleString$Encoding): number;
    codePointAtByteIndexUncached(i: number, expectedEncoding: TruffleString$Encoding, errorHandling: TruffleString$ErrorHandling): number;
    codePointAtIndexUncached(i: number, expectedEncoding: TruffleString$Encoding): number;
    codePointAtIndexUncached(i: number, expectedEncoding: TruffleString$Encoding, errorHandling: TruffleString$ErrorHandling): number;
    codePointIndexToByteIndexUncached(byteOffset: number, codepointIndex: number, expectedEncoding: TruffleString$Encoding): number;
    codePointLength(): number;
    codePointLengthUncached(expectedEncoding: TruffleString$Encoding): number;
    codeRange(): number;
    codeRangeEqualsUncached(otherCodeRange: TruffleString$CodeRange): boolean;
    compareBytesUncached(b: AbstractTruffleString, expectedEncoding: TruffleString$Encoding): number;
    compareCharsUTF16Uncached(b: AbstractTruffleString): number;
    compareIntsUTF32Uncached(b: AbstractTruffleString): number;
    concatUncached(b: AbstractTruffleString, expectedEncoding: TruffleString$Encoding, lazy: boolean): TruffleString;
    copyToByteArrayNodeUncached(byteFromIndexA: number, dst: number[], byteFromIndexDst: number, byteLength: number, expectedEncoding: TruffleString$Encoding): void;
    copyToByteArrayUncached(expectedEncoding: TruffleString$Encoding): number[];
    copyToByteArrayUncached(byteFromIndexA: number, dst: number[], byteFromIndexDst: number, byteLength: number, expectedEncoding: TruffleString$Encoding): void;
    copyToNativeMemoryNodeUncached(byteFromIndexA: number, pointerObject: Object, byteFromIndexDst: number, byteLength: number, expectedEncoding: TruffleString$Encoding): void;
    copyToNativeMemoryUncached(byteFromIndexA: number, pointerObject: Object, byteFromIndexDst: number, byteLength: number, expectedEncoding: TruffleString$Encoding): void;
    createBackwardCodePointIteratorUncached(expectedEncoding: TruffleString$Encoding): TruffleStringIterator;
    createCodePointIteratorUncached(expectedEncoding: TruffleString$Encoding): TruffleStringIterator;
    data(): Object;
    encoding(): number;
    equals(obj: Object | null): boolean;
    equalsUncached(b: AbstractTruffleString, expectedEncoding: TruffleString$Encoding): boolean;
    flags(): number;
    forceEncodingUncached(expectedEncoding: TruffleString$Encoding, targetEncoding: TruffleString$Encoding): TruffleString;
    getByteCodeRangeUncached(expectedEncoding: TruffleString$Encoding): TruffleString$CodeRange;
    getCodeRangeImpreciseUncached(expectedEncoding: TruffleString$Encoding): TruffleString$CodeRange;
    getCodeRangeUncached(expectedEncoding: TruffleString$Encoding): TruffleString$CodeRange;
    getHashCodeUnsafe(): number;
    getInternalByteArrayUncached(expectedEncoding: TruffleString$Encoding): InternalByteArray;
    getInternalNativePointerUncached(expectedEncoding: TruffleString$Encoding): Object;
    getStringCompactionLevelUncached(expectedEncoding: TruffleString$Encoding): TruffleString$CompactionLevel;
    hashCode(): number;
    hashCodeUncached(expectedEncoding: TruffleString$Encoding): number;
    indexOfCodePointUncached(cp: number, fromIndex: number, toIndex: number, expectedEncoding: TruffleString$Encoding): number;
    indexOfStringUncached(b: AbstractTruffleString, fromIndex: number, toIndex: number, expectedEncoding: TruffleString$Encoding): number;
    intIndexOfAnyIntUTF32Uncached(fromIntIndex: number, maxIntIndex: number, values: number[]): number;
    invalidateCodePointLength(): void;
    invalidateCodeRange(): void;
    invalidateHashCode(): void;
    isCodePointLengthKnown(): boolean;
    isCodeRangeCompatibleTo(codeRangeA: number, expectedEncoding: TruffleString$Encoding): boolean;
    isCodeRangeCompatibleTo(codeRangeA: number, maxCompatibleCodeRange: number): boolean;
    isCompatibleTo(expectedEncoding: TruffleString$Encoding): boolean;
    isCompatibleToIntl(expectedEncoding: TruffleString$Encoding): boolean;
    isCompatibleToIntl(enc: number, maxCompatibleCodeRange: number): boolean;
    isCompatibleToUncached(expectedEncoding: TruffleString$Encoding): boolean;
    isEmpty(): boolean;
    isHashCodeCalculated(): boolean;
    isImmutable(): boolean;
    isLazyConcat(): boolean;
    isLazyLong(): boolean;
    isLooselyCompatibleTo(expectedEncoding: TruffleString$Encoding): boolean;
    isLooselyCompatibleTo(expectedEncoding: number, maxCompatibleCodeRange: number, codeRangeA: number): boolean;
    isManaged(): boolean;
    isMaterialized(): boolean;
    isMutable(): boolean;
    isNative(): boolean;
    isValidUncached(expectedEncoding: TruffleString$Encoding): boolean;
    lastByteIndexOfCodePointUncached(cp: number, fromIndex: number, toIndex: number, expectedEncoding: TruffleString$Encoding): number;
    lastByteIndexOfStringUncached(b: AbstractTruffleString, fromIndex: number, toIndex: number, expectedEncoding: TruffleString$Encoding): number;
    lastByteIndexOfStringUncached(b: TruffleString$WithMask, fromIndex: number, toIndex: number, expectedEncoding: TruffleString$Encoding): number;
    lastIndexOfCodePointUncached(cp: number, fromIndex: number, toIndex: number, expectedEncoding: TruffleString$Encoding): number;
    lastIndexOfStringUncached(b: AbstractTruffleString, fromIndex: number, toIndex: number, expectedEncoding: TruffleString$Encoding): number;
    length(): number;
    looseCheckEncoding(expectedEncoding: TruffleString$Encoding, codeRangeA: number): void;
    materializeLazy(node: Node, thisData: Object): number[];
    materializeSubstringUncached(expectedEncoding: TruffleString$Encoding): TruffleString;
    materializeUncached(a: AbstractTruffleString, expectedEncoding: TruffleString$Encoding): void;
    materializeUncached(expectedEncoding: TruffleString$Encoding): void;
    offset(): number;
    parseDoubleUncached(): number;
    parseIntUncached(): number;
    parseIntUncached(radix: number): number;
    parseLongUncached(): number;
    parseLongUncached(radix: number): number;
    readByteUncached(i: number, expectedEncoding: TruffleString$Encoding): number;
    readCharUTF16Uncached(i: number): number;
    regionEqualByteIndexUncached(fromByteIndexA: number, b: AbstractTruffleString, fromByteIndexB: number, byteLength: number, expectedEncoding: TruffleString$Encoding): boolean;
    regionEqualByteIndexUncached(fromByteIndexA: number, b: TruffleString$WithMask, fromByteIndexB: number, byteLength: number, expectedEncoding: TruffleString$Encoding): boolean;
    regionEqualsUncached(fromIndexA: number, b: AbstractTruffleString, fromIndexB: number, regionLength: number, expectedEncoding: TruffleString$Encoding): boolean;
    repeatUncached(n: number, expectedEncoding: TruffleString$Encoding): TruffleString;
    setData(array: number[]): void;
    setHashCode(hashCode: number): number;
    stride(): number;
    substringByteIndexUncached(fromByteIndex: number, byteLength: number, expectedEncoding: TruffleString$Encoding, lazy: boolean): TruffleString;
    substringUncached(fromIndex: number, substringLength: number, expectedEncoding: TruffleString$Encoding, lazy: boolean): TruffleString;
    switchEncodingUncached(targetEncoding: TruffleString$Encoding): TruffleString;
    switchEncodingUncached(targetEncoding: TruffleString$Encoding, errorHandler: (param0: AbstractTruffleString, param1: number, param2: number, param3: TruffleString$Encoding, param4: TruffleString$Encoding) => TranscodingErrorHandler$ReplacementString): TruffleString;
    toJavaStringUncached(): string;
    toString(): string;
    toStringDebug(): string;
    toValidStringUncached(expectedEncoding: TruffleString$Encoding): TruffleString;
    updateAttributes(newCodePointLength: number, newCodeRange: number): void;
}