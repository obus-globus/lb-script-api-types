import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Certificate } from '../../../java/security/cert/Certificate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
export abstract class CertPath extends Object implements Serializable {
    constructor(arg0: string)
    readonly type: string;
    equals(arg0: Object | null): boolean;
    getCertificates(): Certificate[];
    getEncoded(): number[];
    getEncoded(arg0: string): number[];
    getEncodings(): Iterator<string>;
    getType(): string;
    hashCode(): number;
    toString(): string;
    writeReplace(): Object;
}