import type { AeadResult } from '../../../../io/jsonwebtoken/security/AeadResult.d.ts'
import type { DigestSupplier } from '../../../../io/jsonwebtoken/security/DigestSupplier.d.ts'
import type { IvSupplier } from '../../../../io/jsonwebtoken/security/IvSupplier.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultAeadResult extends Object implements AeadResult, DigestSupplier, IvSupplier {
    constructor(arg0: OutputStream)
    readonly iv: number[];
    // private out: OutputStream;
    // private tag: number[];
    getDigest(): number[];
    getIv(): number[];
    getOutputStream(): OutputStream;
    setIv(arg0: number[]): AeadResult;
    setTag(arg0: number[]): AeadResult;
}