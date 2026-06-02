import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Timestamp } from '../../java/security/Timestamp.d.ts'
import type { CertPath } from '../../java/security/cert/CertPath.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class CodeSigner extends Object implements Serializable {
    constructor(arg0: CertPath, arg1: Timestamp)
    // private myhash: number;
    readonly signerCertPath: CertPath;
    readonly timestamp: Timestamp;
    equals(arg0: Object | null): boolean;
    getSignerCertPath(): CertPath;
    getTimestamp(): Timestamp;
    hashCode(): number;
    // private readObject(arg0: ObjectInputStream): void;
    toString(): string;
}