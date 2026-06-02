import type { AbstractSignatureAlgorithm } from '../../../../io/jsonwebtoken/impl/security/AbstractSignatureAlgorithm.d.ts'
import type { EdwardsCurve } from '../../../../io/jsonwebtoken/impl/security/EdwardsCurve.d.ts'
import type { KeyPairBuilder } from '../../../../io/jsonwebtoken/security/KeyPairBuilder.d.ts'
import type { Request } from '../../../../io/jsonwebtoken/security/Request.d.ts'
import type { Key } from '../../../../java/security/Key.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EdSignatureAlgorithm extends AbstractSignatureAlgorithm {
    private constructor()
    // private preferredCurve: EdwardsCurve;
    getJcaName(arg0: Request<Object>): string;
    keyPair(): KeyPairBuilder;
    validateKey(arg0: Key, arg1: boolean): void;
}