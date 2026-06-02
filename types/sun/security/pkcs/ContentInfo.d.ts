import type { Object } from '../../../java/lang/Object.d.ts'
import type { DerEncoder } from '../../../sun/security/util/DerEncoder.d.ts'
import type { DerInputStream } from '../../../sun/security/util/DerInputStream.d.ts'
import type { DerOutputStream } from '../../../sun/security/util/DerOutputStream.d.ts'
import type { DerValue } from '../../../sun/security/util/DerValue.d.ts'
import type { ObjectIdentifier } from '../../../sun/security/util/ObjectIdentifier.d.ts'
export class ContentInfo extends Object implements DerEncoder {
    static DATA_OID: ObjectIdentifier;
    static DIGESTED_DATA_OID: ObjectIdentifier;
    static ENCRYPTED_DATA_OID: ObjectIdentifier;
    static ENVELOPED_DATA_OID: ObjectIdentifier;
    static NETSCAPE_CERT_SEQUENCE_OID: ObjectIdentifier;
    static OLD_DATA_OID: ObjectIdentifier;
    static OLD_SIGNED_DATA_OID: ObjectIdentifier;
    static PKCS7_OID: ObjectIdentifier;
    static SIGNED_AND_ENVELOPED_DATA_OID: ObjectIdentifier;
    static SIGNED_DATA_OID: ObjectIdentifier;
    static TIMESTAMP_TOKEN_INFO_OID: ObjectIdentifier;
    constructor(arg0: number[])
    constructor(arg0: DerInputStream)
    constructor(arg0: DerInputStream, arg1: boolean)
    constructor(arg0: ObjectIdentifier, arg1: DerValue)
    content: DerValue;
    contentType: ObjectIdentifier;
    encode(arg0: DerOutputStream): void;
    getContent(): DerValue;
    getContentBytes(): number[];
    getContentType(): ObjectIdentifier;
    getData(): number[];
    toString(): string;
}