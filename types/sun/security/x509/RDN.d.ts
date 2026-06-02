import type { Object } from '../../../java/lang/Object.d.ts'
import type { DerOutputStream } from '../../../sun/security/util/DerOutputStream.d.ts'
import type { DerValue } from '../../../sun/security/util/DerValue.d.ts'
import type { ObjectIdentifier } from '../../../sun/security/util/ObjectIdentifier.d.ts'
import type { AVA } from '../../../sun/security/x509/AVA.d.ts'
export class RDN extends Object {
    constructor(arg0: AVA[])
    constructor(arg0: number)
    constructor(arg0: string)
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: string, arg2: { [key: string]: string })
    constructor(arg0: string, arg1: { [key: string]: string })
    constructor(arg0: DerValue)
    constructor(arg0: AVA)
    // private assertion: AVA[];
    // private avaList: AVA[];
    // private canonicalString: string;
    avas(): AVA[];
    encode(arg0: DerOutputStream): void;
    equals(arg0: Object | null): boolean;
    findAttribute(arg0: ObjectIdentifier): DerValue;
    hashCode(): number;
    size(): number;
    toRFC1779String(): string;
    toRFC1779String(arg0: { [key: string]: string }): string;
    toRFC2253String(): string;
    toRFC2253String(arg0: boolean): string;
    toRFC2253String(arg0: { [key: string]: string }): string;
    // private toRFC2253StringInternal(arg0: boolean, arg1: { [key: string]: string }): string;
    toString(): string;
}