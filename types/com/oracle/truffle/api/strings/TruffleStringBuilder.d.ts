import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleStringBuilderUTF16 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF16.d.ts'
import type { TruffleStringBuilderUTF32 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF32.d.ts'
import type { TruffleStringBuilderUTF8 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF8.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TruffleStringBuilder extends Object {
    static create(paramencoding: TruffleString$Encoding): TruffleStringBuilder;
    static create(paramencoding: TruffleString$Encoding, paraminitialCapacity: number): TruffleStringBuilder;
    static createUTF16(): TruffleStringBuilderUTF16;
    static createUTF16(paraminitialCapacity: number): TruffleStringBuilderUTF16;
    static createUTF32(): TruffleStringBuilderUTF32;
    static createUTF32(paraminitialCapacity: number): TruffleStringBuilderUTF32;
    static createUTF8(): TruffleStringBuilderUTF8;
    static createUTF8(paraminitialCapacity: number): TruffleStringBuilderUTF8;
    constructor(encoding: TruffleString$Encoding, initialSize: number, codeRange: number)
    // private buf: number[];
    // private codePointLength: number;
    // private codeRange: number;
    // private encoding: TruffleString$Encoding;
    // private length: number;
    // private stride: number;
    appendByteUncached(value: number): void;
    appendCharUTF16Uncached(value: string): void;
    appendCodePointUncached(codepoint: number): void;
    appendCodePointUncached(codepoint: number, repeat: number): void;
    appendCodePointUncached(codepoint: number, repeat: number, allowUTF16Surrogates: boolean): void;
    appendIntNumberUncached(value: number): void;
    appendJavaStringUTF16Uncached(a: string): void;
    appendJavaStringUTF16Uncached(a: string, fromCharIndex: number, charLength: number): void;
    appendLength(addLength: number): void;
    appendLength(addLength: number, addCodePointLength: number): void;
    appendLongNumberUncached(value: number): void;
    appendStringUncached(a: TruffleString): void;
    appendSubstringByteIndexUncached(a: TruffleString, fromByteIndex: number, byteLength: number): void;
    byteLength(): number;
    ensureCapacityAndInflate(node: Node, appendLength: number, appendStride: number, inflateProfile: InlinedBranchProfile, bufferGrowProfile: InlinedBranchProfile, errorProfile: InlinedBranchProfile): void;
    ensureCapacityS0(node: Node, appendLength: number, bufferGrowProfile: InlinedBranchProfile, errorProfile: InlinedBranchProfile): void;
    ensureCapacityWithStride(node: Node, appendLength: number, bufferGrowProfile: InlinedBranchProfile, errorProfile: InlinedBranchProfile): void;
    // private growWithStride(node: Node, errorProfile: InlinedBranchProfile, minimumCapacity: number): void;
    // private inflate(node: Node, appendStride: number): void;
    isEmpty(): boolean;
    newCapacityS0(node: Node, minCapacity: number, errorProfile: InlinedBranchProfile): number;
    newCapacityWithStride(node: Node, minCapacity: number, errorProfile: InlinedBranchProfile): number;
    toString(): string;
    toStringUncached(): TruffleString;
    updateCodeRange(newCodeRange: number): void;
}