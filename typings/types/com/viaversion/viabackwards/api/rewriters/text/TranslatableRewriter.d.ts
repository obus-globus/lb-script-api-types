import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { ComponentRewriter } from '../../../../../../com/viaversion/viaversion/api/rewriter/ComponentRewriter.d.ts'
import type { JsonElement } from '../../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface TranslatableRewriter extends ComponentRewriter, Object{
    mappedTranslationKey(arg0: string): string;
    passthroughAndProcess(arg0: PacketWrapper): void;
    processTag(arg0: UserConnection, arg1: Tag): void;
    processText(arg0: UserConnection, arg1: JsonElement): void;
    processText(arg0: UserConnection, arg1: string): JsonElement;
}