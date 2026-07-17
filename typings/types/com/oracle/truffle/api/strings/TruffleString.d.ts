import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { NativeAllocator } from '../../../../../com/oracle/truffle/api/strings/NativeAllocator.d.ts'
import type { TruffleString$CompactionLevel } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CompactionLevel.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TruffleString extends AbstractTruffleString {
    static fromByteArrayUncached(paramvalue: number[], paramencoding: TruffleString$Encoding): TruffleString;
    static fromByteArrayUncached(paramvalue: number[], paramencoding: TruffleString$Encoding, paramcopy: boolean): TruffleString;
    static fromByteArrayUncached(paramvalue: number[], parambyteOffset: number, parambyteLength: number, paramencoding: TruffleString$Encoding, paramcopy: boolean): TruffleString;
    static fromByteArrayWithCompactionUTF32Uncached(paramarray: number[], parambyteOffset: number, parambyteLength: number, paramcompactionLevel: TruffleString$CompactionLevel, paramcopy: boolean): TruffleString;
    static fromCharArrayUTF16Uncached(paramvalue: string[]): TruffleString;
    static fromCharArrayUTF16Uncached(paramvalue: string[], paramcharOffset: number, paramcharLength: number): TruffleString;
    static fromCodePointUncached(paramcodepoint: number, paramencoding: TruffleString$Encoding): TruffleString;
    static fromCodePointUncached(paramcodepoint: number, paramencoding: TruffleString$Encoding, paramallowUTF16Surrogates: boolean): TruffleString;
    static fromConstant(params: string, paramencoding: TruffleString$Encoding): TruffleString;
    static fromIntArrayUTF32Uncached(paramvalue: number[]): TruffleString;
    static fromIntArrayUTF32Uncached(paramvalue: number[], paramintOffset: number, paramintLength: number): TruffleString;
    static fromJavaStringUncached(params: string, paramencoding: TruffleString$Encoding): TruffleString;
    static fromJavaStringUncached(params: string, paramcharOffset: number, paramlength: number, paramencoding: TruffleString$Encoding, paramcopy: boolean): TruffleString;
    static fromLongUncached(paramvalue: number, paramencoding: TruffleString$Encoding, paramlazy: boolean): TruffleString;
    static fromNativePointerUncached(parampointerObject: Object, parambyteOffset: number, parambyteLength: number, paramencoding: TruffleString$Encoding, paramcopy: boolean): TruffleString;
    static fromNativePointerWithCompactionUTF32Uncached(parampointerObject: Object, parambyteOffset: number, parambyteLength: number, paramcompactionLevel: TruffleString$CompactionLevel, paramcopy: boolean): TruffleString;
    static fromZeroTerminatedNativePointer16BitUncached(parampointerObject: Object, parambyteOffset: number, paramencoding: TruffleString$Encoding, paramcopy: boolean): TruffleString;
    static fromZeroTerminatedNativePointer32BitUncached(parampointerObject: Object, parambyteOffset: number, paramencoding: TruffleString$Encoding, paramcopy: boolean): TruffleString;
    static fromZeroTerminatedNativePointer8BitUncached(parampointerObject: Object, parambyteOffset: number, paramencoding: TruffleString$Encoding, paramcopy: boolean): TruffleString;
    private constructor(data: Object, offset: number, length: number, stride: number, encoding: TruffleString$Encoding, codePointLength: number, codeRange: number, hashCode: number, isCacheHead: boolean)
    // private next: TruffleString;
    asNativeUncached(allocator: (param0: number) => Object, expectedEncoding: TruffleString$Encoding, useCompaction: boolean, cacheResult: boolean): TruffleString;
    cacheInsert(entry: TruffleString): void;
    // private cacheRingIsValid(): boolean;
    getCacheHead(): TruffleString;
    isCacheHead(): boolean;
}