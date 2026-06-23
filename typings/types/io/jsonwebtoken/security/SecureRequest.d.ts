import type { KeySupplier } from '../../../io/jsonwebtoken/security/KeySupplier.d.ts'
import type { Request } from '../../../io/jsonwebtoken/security/Request.d.ts'
import type { Key } from '../../../java/security/Key.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface SecureRequest<T extends unknown, K extends Key> extends KeySupplier<K>, Request<T>, Object{
}