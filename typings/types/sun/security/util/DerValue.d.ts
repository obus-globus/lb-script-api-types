import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { BigInteger } from '../../../java/math/BigInteger.d.ts'
import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { Date } from '../../../java/util/Date.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { BitArray } from '../../../sun/security/util/BitArray.d.ts'
import type { DerInputStream } from '../../../sun/security/util/DerInputStream.d.ts'
import type { DerOutputStream } from '../../../sun/security/util/DerOutputStream.d.ts'
import type { ObjectIdentifier } from '../../../sun/security/util/ObjectIdentifier.d.ts'
export class DerValue extends Object {
    static TAG_APPLICATION: number;
    static TAG_CONSTRUCT: number;
    static TAG_CONTEXT: number;
    static TAG_PRIVATE: number;
    static TAG_UNIVERSAL: number;
    static tag_BMPString: number;
    static tag_BitString: number;
    static tag_Boolean: number;
    static tag_Enumerated: number;
    static tag_GeneralString: number;
    static tag_GeneralizedTime: number;
    static tag_IA5String: number;
    static tag_Integer: number;
    static tag_Null: number;
    static tag_ObjectId: number;
    static tag_OctetString: number;
    static tag_PrintableString: number;
    static tag_Sequence: number;
    static tag_SequenceOf: number;
    static tag_Set: number;
    static tag_SetOf: number;
    static tag_T61String: number;
    static tag_UTF8String: number;
    static tag_UniversalString: number;
    static tag_UtcTime: number;
    static createTag(paramarg0: number, paramarg1: boolean, paramarg2: number): number;
    static isPrintableStringChar(paramarg0: string): boolean;
    static wrap(paramarg0: number, paramarg1: DerOutputStream): DerValue;
    static wrap(paramarg0: number[]): DerValue;
    static wrap(paramarg0: number[], paramarg1: number, paramarg2: number): DerValue;
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: boolean)
    constructor(arg0: number, arg1: number[])
    constructor(arg0: number, arg1: number[], arg2: boolean)
    constructor(arg0: number, arg1: number[], arg2: number, arg3: number, arg4: boolean)
    constructor(arg0: number, arg1: string)
    constructor(arg0: number[])
    constructor(arg0: number[], arg1: number, arg2: number, arg3: boolean, arg4: boolean)
    constructor(arg0: string)
    // private allowBER: boolean;
    // private buffer: number[];
    // private end: number;
    // private start: number;
    tag: number;
    clear(): void;
    data(): DerInputStream;
    encode(arg0: DerOutputStream): void;
    equals(arg0: Object | null): boolean;
    getAsString(): string;
    getBMPString(): string;
    getBigInteger(): BigInteger;
    // private getBigIntegerInternal(arg0: number, arg1: boolean): BigInteger;
    getBitString(): number[];
    getBitString(arg0: boolean): number[];
    getBoolean(): boolean;
    getData(): DerInputStream;
    getDataBytes(): number[];
    getEnumerated(): number;
    getGeneralString(): string;
    getGeneralizedTime(): Date;
    getIA5String(): string;
    getInteger(): number;
    // private getIntegerInternal(arg0: number): number;
    getNull(): void;
    getOID(): ObjectIdentifier;
    getOctetString(): number[];
    // private getOctetString(arg0: number): number[];
    getPositiveBigInteger(): BigInteger;
    getPrintableString(): string;
    getT61String(): string;
    getTag(): number;
    getTime(): Date;
    // private getTimeInternal(arg0: boolean): Date;
    getUTCTime(): Date;
    getUTF8String(): string;
    getUnalignedBitString(): BitArray;
    getUnalignedBitString(arg0: boolean): BitArray;
    getUniversalString(): string;
    hashCode(): number;
    isApplication(): boolean;
    isConstructed(): boolean;
    isConstructed(arg0: number): boolean;
    isContextSpecific(): boolean;
    isContextSpecific(arg0: number): boolean;
    isPrivate(): boolean;
    isUniversal(): boolean;
    length(): number;
    // private readStringInternal(arg0: number, arg1: Charset): string;
    resetTag(arg0: number): void;
    subs(arg0: number, arg1: number): DerValue[];
    toByteArray(): number[];
    toDerInputStream(): DerInputStream;
    toString(): string;
    validateBMPString(): void;
    withTag(arg0: number): DerValue;
}