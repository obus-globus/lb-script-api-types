import type { StorableObject } from '../../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { ProfileKey } from '../../../../../../../com/viaversion/viaversion/api/minecraft/ProfileKey.d.ts'
import type { DataConsumer } from '../../../../../../../com/viaversion/viaversion/api/minecraft/signature/util/DataConsumer.d.ts'
import type { PrivateKey } from '../../../../../../../java/security/PrivateKey.d.ts'
import type { Signature } from '../../../../../../../java/security/Signature.d.ts'
import type { UUID } from '../../../../../../../java/util/UUID.d.ts'
import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ChatSession extends Object implements StorableObject {
    constructor(arg0: UUID, arg1: PrivateKey, arg2: ProfileKey)
    // private privateKey: PrivateKey;
    readonly profileKey: ProfileKey;
    // private signer: Signature;
    readonly uuid: UUID;
    getProfileKey(): ProfileKey;
    getUuid(): UUID;
    onRemove(): void;
    sign(arg0: (param0: (param0: number[]) => void) => void): number[];
}