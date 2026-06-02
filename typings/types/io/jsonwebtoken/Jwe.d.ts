import type { ProtectedJwt } from '../../io/jsonwebtoken/ProtectedJwt.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Jwe<B extends Object | number | string | boolean> extends ProtectedJwt<JweHeader, B>, Object{
    getInitializationVector(): number[];
}