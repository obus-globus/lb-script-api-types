import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { CertPath } from '../../java/security/cert/CertPath.d.ts'
import type { Date } from '../../java/util/Date.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Timestamp extends Object implements Serializable {
    constructor(arg0: Date, arg1: CertPath)
    // private myhash: number;
    readonly signerCertPath: CertPath;
    readonly timestamp: Date;
    equals(arg0: Object | null): boolean;
    getSignerCertPath(): CertPath;
    getTimestamp(): Date;
    hashCode(): number;
    // private readObject(arg0: ObjectInputStream): void;
    toString(): string;
}