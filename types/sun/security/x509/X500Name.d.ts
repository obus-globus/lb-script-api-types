import type { Principal } from '../../../java/security/Principal.d.ts'
import type { Subject } from '../../../javax/security/auth/Subject.d.ts'
import type { X500Principal } from '../../../javax/security/auth/x500/X500Principal.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { DerInputStream } from '../../../sun/security/util/DerInputStream.d.ts'
import type { DerOutputStream } from '../../../sun/security/util/DerOutputStream.d.ts'
import type { DerValue } from '../../../sun/security/util/DerValue.d.ts'
import type { ObjectIdentifier } from '../../../sun/security/util/ObjectIdentifier.d.ts'
import type { AVA } from '../../../sun/security/x509/AVA.d.ts'
import type { GeneralNameInterface } from '../../../sun/security/x509/GeneralNameInterface.d.ts'
import type { RDN } from '../../../sun/security/x509/RDN.d.ts'
export class X500Name extends Object implements Principal, GeneralNameInterface {
    static DNQUALIFIER_OID: ObjectIdentifier;
    static DOMAIN_COMPONENT_OID: ObjectIdentifier;
    static GENERATIONQUALIFIER_OID: ObjectIdentifier;
    static GIVENNAME_OID: ObjectIdentifier;
    static INITIALS_OID: ObjectIdentifier;
    static NAME_ANY: number;
    static NAME_DIFF_TYPE: number;
    static NAME_DIRECTORY: number;
    static NAME_DNS: number;
    static NAME_EDI: number;
    static NAME_IP: number;
    static NAME_MATCH: number;
    static NAME_NARROWS: number;
    static NAME_OID: number;
    static NAME_RFC822: number;
    static NAME_SAME_TYPE: number;
    static NAME_URI: number;
    static NAME_WIDENS: number;
    static NAME_X400: number;
    static SERIALNUMBER_OID: ObjectIdentifier;
    static SURNAME_OID: ObjectIdentifier;
    static commonName_oid: ObjectIdentifier;
    static countryName_oid: ObjectIdentifier;
    static ipAddress_oid: ObjectIdentifier;
    static localityName_oid: ObjectIdentifier;
    static orgName_oid: ObjectIdentifier;
    static orgUnitName_oid: ObjectIdentifier;
    static stateName_oid: ObjectIdentifier;
    static streetAddress_oid: ObjectIdentifier;
    static title_oid: ObjectIdentifier;
    static userid_oid: ObjectIdentifier;
    static asX500Name(paramarg0: X500Principal): X500Name;
    constructor(arg0: RDN[])
    constructor(arg0: number[])
    constructor(arg0: string)
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: string, arg2: string, arg3: string)
    constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string)
    constructor(arg0: string, arg1: { [key: string]: string })
    constructor(arg0: DerInputStream)
    constructor(arg0: DerValue)
    // private allAvaList: AVA[];
    // private canonicalDn: string;
    // private dn: string;
    readonly encoded: number[];
    // private names: RDN[];
    // private rdnList: RDN[];
    // private rfc1779Dn: string;
    // private rfc2253Dn: string;
    // private x500Principal: X500Principal;
    allAvas(): AVA[];
    asX500Principal(): X500Principal;
    avaSize(): number;
    constrains(arg0: GeneralNameInterface): number;
    emit(arg0: DerOutputStream): void;
    encode(arg0: DerOutputStream): void;
    equals(arg0: Object | null): boolean;
    // private findAttribute(arg0: ObjectIdentifier): DerValue;
    findMostSpecificAttribute(arg0: ObjectIdentifier): DerValue;
    // private generateDN(): void;
    // private generateRFC1779DN(arg0: { [key: string]: string }): string;
    // private generateRFC2253DN(arg0: { [key: string]: string }): string;
    getCommonName(): string;
    getCountry(): string;
    getDNQualifier(): string;
    getDomain(): string;
    getEncoded(): number[];
    getEncodedInternal(): number[];
    getGeneration(): string;
    getGivenName(): string;
    getIP(): string;
    getInitials(): string;
    getLocality(): string;
    getName(): string;
    getOrganization(): string;
    getOrganizationalUnit(): string;
    getRFC1779Name(): string;
    getRFC1779Name(arg0: { [key: string]: string }): string;
    getRFC2253CanonicalName(): string;
    getRFC2253Name(): string;
    getRFC2253Name(arg0: { [key: string]: string }): string;
    getState(): string;
    // private getString(arg0: DerValue): string;
    getSurname(): string;
    getType(): number;
    hashCode(): number;
    implies(arg0: Subject): boolean;
    isEmpty(): boolean;
    // private isWithinSubtree(arg0: X500Name): boolean;
    // private parseDER(arg0: DerInputStream): void;
    // private parseDN(arg0: string, arg1: { [key: string]: string }): void;
    // private parseRFC2253DN(arg0: string): void;
    rdns(): RDN[];
    size(): number;
    subtreeDepth(): number;
    toString(): string;
}