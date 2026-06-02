import type { Certificate } from '../../../java/security/cert/Certificate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class CRL extends Object {
    constructor(arg0: string)
    readonly type: string;
    getType(): string;
    isRevoked(arg0: Certificate): boolean;
    toString(): string;
}