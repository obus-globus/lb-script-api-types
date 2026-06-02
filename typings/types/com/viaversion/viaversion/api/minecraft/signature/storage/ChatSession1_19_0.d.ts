import type { ProfileKey } from '../../../../../../../com/viaversion/viaversion/api/minecraft/ProfileKey.d.ts'
import type { DecoratableMessage } from '../../../../../../../com/viaversion/viaversion/api/minecraft/signature/model/DecoratableMessage.d.ts'
import type { MessageMetadata } from '../../../../../../../com/viaversion/viaversion/api/minecraft/signature/model/MessageMetadata.d.ts'
import type { ChatSession } from '../../../../../../../com/viaversion/viaversion/api/minecraft/signature/storage/ChatSession.d.ts'
import type { PrivateKey } from '../../../../../../../java/security/PrivateKey.d.ts'
import type { UUID } from '../../../../../../../java/util/UUID.d.ts'
export class ChatSession1_19_0 extends ChatSession {
    constructor(arg0: UUID, arg1: PrivateKey, arg2: ProfileKey)
    signChatMessage(arg0: MessageMetadata, arg1: DecoratableMessage): number[];
}