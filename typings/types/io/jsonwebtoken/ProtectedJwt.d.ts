import type { Jwt } from '../../io/jsonwebtoken/Jwt.d.ts'
import type { DigestSupplier } from '../../io/jsonwebtoken/security/DigestSupplier.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface ProtectedJwt<H extends { [key: string]: any }, P extends unknown> extends Jwt<H, P>, DigestSupplier, Object{
}