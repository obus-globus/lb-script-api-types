import type { Object } from '../java/lang/Object.d.ts'
import type { CertificatePinner } from '../okhttp3/CertificatePinner.d.ts'
import type { CertificatePinner$Pin } from '../okhttp3/CertificatePinner$Pin.d.ts'
export class CertificatePinner$Builder extends Object {
    constructor()
    readonly pins: CertificatePinner$Pin[];
    add(pattern: string, ...pins: string[]): CertificatePinner$Builder;
    build(): CertificatePinner;
}