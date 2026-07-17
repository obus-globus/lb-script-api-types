import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Curve } from '../../../io/jsonwebtoken/security/Curve.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Jwks$CRV extends Object {
    static Ed25519: Curve;
    static Ed448: Curve;
    static P256: Curve;
    static P384: Curve;
    static P521: Curve;
    static X25519: Curve;
    static X448: Curve;
    static get(): JavaMap<string, Curve>;
    private constructor()
}