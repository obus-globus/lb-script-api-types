import type { BigInteger } from '../../../java/math/BigInteger.d.ts'
import type { Date } from '../../../java/util/Date.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Predicate } from '../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { BitArray } from '../../../sun/security/util/BitArray.d.ts'
import type { DerValue } from '../../../sun/security/util/DerValue.d.ts'
import type { ObjectIdentifier } from '../../../sun/security/util/ObjectIdentifier.d.ts'
export class DerInputStream extends Object {
    constructor(arg0: number[])
    constructor(arg0: number[], arg1: number, arg2: number)
    constructor(arg0: number[], arg1: number, arg2: number, arg3: boolean)
    // private allowBER: boolean;
    // private data: number[];
    // private end: number;
    // private mark: number;
    // private pos: number;
    // private start: number;
    atEnd(): void;
    available(): number;
    // private checkNextTag(arg0: (param0: number) => boolean): boolean;
    // private checkNextTag(arg0: number): boolean;
    getBMPString(): string;
    getBigInteger(): BigInteger;
    getBitString(): number[];
    getDerValue(): DerValue;
    getEnumerated(): number;
    getGeneralString(): string;
    getGeneralizedTime(): Date;
    getIA5String(): string;
    getInteger(): number;
    getNull(): void;
    getOID(): ObjectIdentifier;
    getOctetString(): number[];
    getOptional(arg0: number): Optional<DerValue>;
    getOptionalExplicitContextSpecific(arg0: number): Optional<DerValue>;
    getOptionalImplicitContextSpecific(arg0: number, arg1: number): Optional<DerValue>;
    getPositiveBigInteger(): BigInteger;
    getPrintableString(): string;
    getSequence(arg0: number): DerValue[];
    getSet(arg0: number): DerValue[];
    getSet(arg0: number, arg1: boolean): DerValue[];
    getT61String(): string;
    getTime(): Date;
    getUTCTime(): Date;
    getUTF8String(): string;
    getUnalignedBitString(): BitArray;
    mark(arg0: number): void;
    peekByte(): number;
    reset(): void;
    seeOptionalContextSpecific(arg0: number): boolean;
    toByteArray(): number[];
}