import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleStringBuilder } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder.d.ts'
import type { TruffleStringBuilderUTF16 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF16.d.ts'
import type { TruffleStringBuilderUTF32 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF32.d.ts'
export class TruffleStringBuilderUTF8 extends TruffleStringBuilder {
    static create(paramencoding: TruffleString$Encoding): TruffleStringBuilder;
    static create(paramencoding: TruffleString$Encoding, paraminitialCapacity: number): TruffleStringBuilder;
    static createUTF16(): TruffleStringBuilderUTF16;
    static createUTF16(paraminitialCapacity: number): TruffleStringBuilderUTF16;
    static createUTF32(): TruffleStringBuilderUTF32;
    static createUTF32(paraminitialCapacity: number): TruffleStringBuilderUTF32;
    static createUTF8(): TruffleStringBuilderUTF8;
    static createUTF8(paraminitialCapacity: number): TruffleStringBuilderUTF8;
    constructor(initialSize: number)
}