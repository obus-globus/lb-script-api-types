import type { ProtectedJwt } from '../../io/jsonwebtoken/ProtectedJwt.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Jwe<B extends unknown> extends ProtectedJwt<{ [key: string]: any }, B>, Object{
    getInitializationVector(): number[];
}