import type { ProtectedJwt } from '../../io/jsonwebtoken/ProtectedJwt.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Jws<P extends unknown> extends ProtectedJwt<{ [key: string]: any }, P>, Object{
    getSignature(): string;
}