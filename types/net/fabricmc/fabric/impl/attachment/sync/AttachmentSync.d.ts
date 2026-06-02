import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ModInitializer } from '../../../../../../net/fabricmc/api/ModInitializer.d.ts'
import type { AttachmentChange } from '../../../../../../net/fabricmc/fabric/impl/attachment/sync/AttachmentChange.d.ts'
import type { ServerboundAcceptedAttachmentsPayload } from '../../../../../../net/fabricmc/fabric/impl/attachment/sync/serverbound/ServerboundAcceptedAttachmentsPayload.d.ts'
import type { ServerPlayer } from '../../../../../../net/minecraft/server/level/ServerPlayer.d.ts'
export class AttachmentSync extends Object implements ModInitializer {
    static DEFAULT_ATTACHMENT_SYNC_PACKET_SIZE: number;
    static DEFAULT_MAX_DATA_SIZE: number;
    static MAX_IDENTIFIER_SIZE: number;
    static MAX_PADDING_SIZE_IN_BYTES: number;
    static createResponsePayload(): ServerboundAcceptedAttachmentsPayload;
    static trySync(paramarg0: AttachmentChange[], paramarg1: ServerPlayer): void;
    static trySync(paramarg0: AttachmentChange, paramarg1: ServerPlayer): void;
    constructor()
    onInitialize(): void;
}