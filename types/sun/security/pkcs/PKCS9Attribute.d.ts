import type { Object } from '../../../java/lang/Object.d.ts'
import type { PKCS9Attribute$AttributeInfo } from '../../../sun/security/pkcs/PKCS9Attribute$AttributeInfo.d.ts'
import type { DerEncoder } from '../../../sun/security/util/DerEncoder.d.ts'
import type { DerOutputStream } from '../../../sun/security/util/DerOutputStream.d.ts'
import type { DerValue } from '../../../sun/security/util/DerValue.d.ts'
import type { ObjectIdentifier } from '../../../sun/security/util/ObjectIdentifier.d.ts'
export class PKCS9Attribute extends Object implements DerEncoder {
    static CHALLENGE_PASSWORD_OID: ObjectIdentifier;
    static CMS_ALGORITHM_PROTECTION_OID: ObjectIdentifier;
    static CONTENT_TYPE_OID: ObjectIdentifier;
    static COUNTERSIGNATURE_OID: ObjectIdentifier;
    static EMAIL_ADDRESS_OID: ObjectIdentifier;
    static EXTENDED_CERTIFICATE_ATTRIBUTES_OID: ObjectIdentifier;
    static EXTENSION_REQUEST_OID: ObjectIdentifier;
    static ISSUER_SERIALNUMBER_OID: ObjectIdentifier;
    static MESSAGE_DIGEST_OID: ObjectIdentifier;
    static SIGNATURE_TIMESTAMP_TOKEN_OID: ObjectIdentifier;
    static SIGNING_CERTIFICATE_OID: ObjectIdentifier;
    static SIGNING_TIME_OID: ObjectIdentifier;
    static UNSTRUCTURED_ADDRESS_OID: ObjectIdentifier;
    static UNSTRUCTURED_NAME_OID: ObjectIdentifier;
    static getName(paramarg0: ObjectIdentifier): string;
    static getOID(paramarg0: string): ObjectIdentifier;
    static getOIDs(): ObjectIdentifier[];
    constructor(arg0: DerValue)
    constructor(arg0: ObjectIdentifier, arg1: Object)
    // private info: PKCS9Attribute$AttributeInfo<Object>;
    // private oid: ObjectIdentifier;
    readonly value: Object;
    encode(arg0: DerOutputStream): void;
    getName(): string;
    getOID(): ObjectIdentifier;
    getValue(): Object;
    isKnown(): boolean;
    isSingleValued(): boolean;
    // private throwSingleValuedException(): void;
    // private throwTagException(arg0: number): void;
    toString(): string;
}