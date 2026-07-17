import type { JavaMap } from '../../JavaMap.d.ts'
import type { ProtectedJwt } from '../../io/jsonwebtoken/ProtectedJwt.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Jws<P extends unknown> extends ProtectedJwt<JavaMap<any, any>, P>, Object{
    getSignature(): string;
}