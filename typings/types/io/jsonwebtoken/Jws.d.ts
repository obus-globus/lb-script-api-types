import type { ProtectedJwt } from '../../io/jsonwebtoken/ProtectedJwt.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Jws<P extends Object | number | string | boolean> extends ProtectedJwt<JwsHeader, P>, Object{
    getSignature(): string;
}