import type { CertificateException } from '../../../../java/security/cert/CertificateException.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class OpenSslCertificateException extends CertificateException {
    constructor(arg0: number)
    constructor(arg0: string, arg1: number)
    constructor(arg0: string, arg1: Throwable, arg2: number)
    constructor(arg0: Throwable, arg1: number)
    // private errorCode: number;
    errorCode(): number;
}