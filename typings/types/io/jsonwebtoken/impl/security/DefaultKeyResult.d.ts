import type { DefaultMessage } from '../../../../io/jsonwebtoken/impl/security/DefaultMessage.d.ts'
import type { KeyResult } from '../../../../io/jsonwebtoken/security/KeyResult.d.ts'
import type { SecretKey } from '../../../../javax/crypto/SecretKey.d.ts'
export class DefaultKeyResult extends DefaultMessage<number[]> implements KeyResult {
    constructor(arg0: SecretKey)
    constructor(arg0: SecretKey, arg1: number[])
    readonly key: SecretKey;
    assertBytePayload(arg0: number[]): void;
    getKey(): SecretKey;
}