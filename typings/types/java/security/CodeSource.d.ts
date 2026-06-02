import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { SocketPermission } from '../../java/net/SocketPermission.d.ts'
import type { URL } from '../../java/net/URL.d.ts'
import type { CodeSigner } from '../../java/security/CodeSigner.d.ts'
import type { Certificate } from '../../java/security/cert/Certificate.d.ts'
import type { CertificateFactory } from '../../java/security/cert/CertificateFactory.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class CodeSource extends Object implements Serializable {
    constructor(arg0: URL, arg1: CodeSigner[])
    constructor(arg0: URL, arg1: Certificate[])
    // private certs: Certificate[];
    // private factory: CertificateFactory;
    readonly location: URL;
    // private locationNoFragString: string;
    // private signers: CodeSigner[];
    // private sp: SocketPermission;
    // private convertCertArrayToSignerArray(arg0: Certificate[]): CodeSigner[];
    equals(arg0: Object | null): boolean;
    getCertificates(): Certificate[];
    getCodeSigners(): CodeSigner[];
    getLocation(): URL;
    getLocationNoFragString(): string;
    hashCode(): number;
    implies(arg0: CodeSource): boolean;
    matchCerts(arg0: CodeSource, arg1: boolean): boolean;
    // private matchLocation(arg0: CodeSource): boolean;
    // private readObject(arg0: ObjectInputStream): void;
    toString(): string;
    // private writeObject(arg0: ObjectOutputStream): void;
}