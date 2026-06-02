import type { CodeSigner } from '../../../java/security/CodeSigner.d.ts'
import type { Key } from '../../../java/security/Key.d.ts'
import type { CertPath } from '../../../java/security/cert/CertPath.d.ts'
import type { X509Certificate } from '../../../java/security/cert/X509Certificate.d.ts'
import type { Date } from '../../../java/util/Date.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ConstraintsParameters } from '../../../sun/security/util/ConstraintsParameters.d.ts'
export class JarConstraintsParameters extends Object implements ConstraintsParameters {
    constructor(arg0: CodeSigner[])
    constructor(arg0: X509Certificate[], arg1: Date)
    // private anchorIsJdkCA: boolean;
    // private anchorIsJdkCASet: boolean;
    // private certsIssuedByAnchor: X509Certificate[];
    readonly keys: Key[];
    // private message: string;
    // private timestamp: Date;
    // private addToCertsAndKeys(arg0: CertPath): void;
    // private addToCertsAndKeys(arg0: X509Certificate[]): void;
    anchorIsJdkCA(): boolean;
    extendedExceptionMsg(): string;
    getDate(): Date;
    getKeys(): Key[];
    getVariant(): string;
    setExtendedExceptionMsg(arg0: string, arg1: string): void;
    toString(): string;
}