import type { ByteArrayOutputStream } from '../../../java/io/ByteArrayOutputStream.d.ts'
import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { BigInteger } from '../../../java/math/BigInteger.d.ts'
import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { Comparator } from '../../../java/util/Comparator.d.ts'
import type { Date } from '../../../java/util/Date.d.ts'
import type { BitArray } from '../../../sun/security/util/BitArray.d.ts'
import type { DerEncoder } from '../../../sun/security/util/DerEncoder.d.ts'
import type { DerValue } from '../../../sun/security/util/DerValue.d.ts'
import type { ObjectIdentifier } from '../../../sun/security/util/ObjectIdentifier.d.ts'
export class DerOutputStream extends ByteArrayOutputStream implements DerEncoder {
    static nullOutputStream(): OutputStream;
    constructor()
    constructor(arg0: number)
    buf(): number[];
    encode(arg0: DerOutputStream): void;
    putBMPString(arg0: string): DerOutputStream;
    putBitString(arg0: number[]): DerOutputStream;
    putBoolean(arg0: boolean): DerOutputStream;
    putDerValue(arg0: DerValue): DerOutputStream;
    putEnumerated(arg0: number): DerOutputStream;
    putGeneralString(arg0: string): DerOutputStream;
    putGeneralizedTime(arg0: Date): DerOutputStream;
    putIA5String(arg0: string): DerOutputStream;
    putInteger(arg0: BigInteger): DerOutputStream;
    putInteger(arg0: number[]): DerOutputStream;
    putInteger(arg0: number): DerOutputStream;
    // private putIntegerContents(arg0: number): void;
    putLength(arg0: number): void;
    putNull(): DerOutputStream;
    putOID(arg0: ObjectIdentifier): DerOutputStream;
    putOctetString(arg0: number[]): DerOutputStream;
    putOrderedSet(arg0: number, arg1: DerEncoder[]): DerOutputStream;
    // private putOrderedSet(arg0: number, arg1: DerEncoder[], arg2: (param0: number[], param1: number[]) => number): DerOutputStream;
    putOrderedSetOf(arg0: number, arg1: DerEncoder[]): DerOutputStream;
    putPrintableString(arg0: string): DerOutputStream;
    putSequence(arg0: DerValue[]): DerOutputStream;
    putSet(arg0: DerValue[]): DerOutputStream;
    putT61String(arg0: string): DerOutputStream;
    putTime(arg0: Date): DerOutputStream;
    // private putTime(arg0: Date, arg1: number): DerOutputStream;
    putTruncatedUnalignedBitString(arg0: BitArray): DerOutputStream;
    putUTCTime(arg0: Date): DerOutputStream;
    putUTF8String(arg0: string): DerOutputStream;
    putUnalignedBitString(arg0: BitArray): DerOutputStream;
    write(arg0: number, arg1: number[]): DerOutputStream;
    write(arg0: number, arg1: DerOutputStream): DerOutputStream;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    write(arg0: DerEncoder): DerOutputStream;
    writeImplicit(arg0: number, arg1: DerOutputStream): DerOutputStream;
    // private writeString(arg0: string, arg1: number, arg2: Charset): DerOutputStream;
}