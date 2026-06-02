import type { Reader } from '../../../java/io/Reader.d.ts'
import type { StringBuilder } from '../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { DerEncoder } from '../../../sun/security/util/DerEncoder.d.ts'
import type { DerInputStream } from '../../../sun/security/util/DerInputStream.d.ts'
import type { DerOutputStream } from '../../../sun/security/util/DerOutputStream.d.ts'
import type { DerValue } from '../../../sun/security/util/DerValue.d.ts'
import type { ObjectIdentifier } from '../../../sun/security/util/ObjectIdentifier.d.ts'
export class AVA extends Object implements DerEncoder {
    constructor(arg0: Reader)
    constructor(arg0: Reader, arg1: number)
    constructor(arg0: Reader, arg1: number, arg2: { [key: string]: string })
    constructor(arg0: Reader, arg1: { [key: string]: string })
    constructor(arg0: DerInputStream)
    constructor(arg0: DerValue)
    constructor(arg0: ObjectIdentifier, arg1: DerValue)
    // private oid: ObjectIdentifier;
    // private value: DerValue;
    encode(arg0: DerOutputStream): void;
    equals(arg0: Object | null): boolean;
    getDerValue(): DerValue;
    getObjectIdentifier(): ObjectIdentifier;
    getValueString(): string;
    hasRFC2253Keyword(): boolean;
    hashCode(): number;
    // private parseQuotedString(arg0: Reader, arg1: StringBuilder): DerValue;
    // private parseString(arg0: Reader, arg1: number, arg2: number, arg3: StringBuilder): DerValue;
    // private toKeyword(arg0: number, arg1: { [key: string]: string }): string;
    // private toKeywordValueString(arg0: string, arg1: boolean): string;
    toRFC1779String(): string;
    toRFC1779String(arg0: { [key: string]: string }): string;
    toRFC2253CanonicalString(): string;
    toRFC2253String(): string;
    toRFC2253String(arg0: { [key: string]: string }): string;
    toString(): string;
}