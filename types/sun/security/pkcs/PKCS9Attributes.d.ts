import type { Object } from '../../../java/lang/Object.d.ts'
import type { PKCS9Attribute } from '../../../sun/security/pkcs/PKCS9Attribute.d.ts'
import type { DerInputStream } from '../../../sun/security/util/DerInputStream.d.ts'
import type { DerOutputStream } from '../../../sun/security/util/DerOutputStream.d.ts'
import type { ObjectIdentifier } from '../../../sun/security/util/ObjectIdentifier.d.ts'
export class PKCS9Attributes extends Object {
    constructor(arg0: PKCS9Attribute[])
    constructor(arg0: ObjectIdentifier[], arg1: DerInputStream)
    constructor(arg0: DerInputStream)
    constructor(arg0: DerInputStream, arg1: boolean)
    // private attributes: Map<ObjectIdentifier, PKCS9Attribute>;
    readonly derEncoding: number[];
    // private ignoreUnsupportedAttributes: boolean;
    // private permittedAttributes: Map<ObjectIdentifier, ObjectIdentifier>;
    // private decode(arg0: DerInputStream): number[];
    encode(arg0: number, arg1: DerOutputStream): void;
    // private generateDerEncoding(): number[];
    getAttribute(arg0: string): PKCS9Attribute;
    getAttribute(arg0: ObjectIdentifier): PKCS9Attribute;
    getAttributeValue(arg0: string): Object;
    getAttributeValue(arg0: ObjectIdentifier): Object;
    getDerEncoding(): number[];
    toString(): string;
}