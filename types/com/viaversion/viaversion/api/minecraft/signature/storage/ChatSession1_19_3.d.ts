import type { PlayerMessageSignature } from '../../../../../../../com/viaversion/viaversion/api/minecraft/PlayerMessageSignature.d.ts'
import type { ProfileKey } from '../../../../../../../com/viaversion/viaversion/api/minecraft/ProfileKey.d.ts'
import type { MessageMetadata } from '../../../../../../../com/viaversion/viaversion/api/minecraft/signature/model/MessageMetadata.d.ts'
import type { MessageLink } from '../../../../../../../com/viaversion/viaversion/api/minecraft/signature/model/chain/v1_19_3/MessageLink.d.ts'
import type { ChatSession } from '../../../../../../../com/viaversion/viaversion/api/minecraft/signature/storage/ChatSession.d.ts'
import type { PrivateKey } from '../../../../../../../java/security/PrivateKey.d.ts'
import type { UUID } from '../../../../../../../java/util/UUID.d.ts'
export class ChatSession1_19_3 extends ChatSession {
    constructor(arg0: UUID, arg1: PrivateKey, arg2: ProfileKey)
    // private link: MessageLink;
    readonly sessionId: UUID;
    getSessionId(): UUID;
    // private nextLink(): MessageLink;
    signChatMessage(arg0: MessageMetadata, arg1: string, arg2: PlayerMessageSignature[]): number[];
}