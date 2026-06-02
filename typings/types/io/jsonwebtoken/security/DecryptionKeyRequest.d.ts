import type { KeyRequest } from '../../../io/jsonwebtoken/security/KeyRequest.d.ts'
import type { SecureRequest } from '../../../io/jsonwebtoken/security/SecureRequest.d.ts'
import type { Key } from '../../../java/security/Key.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface DecryptionKeyRequest<K extends Key> extends KeyRequest<number[]>, SecureRequest<number[], K>, Object{
}