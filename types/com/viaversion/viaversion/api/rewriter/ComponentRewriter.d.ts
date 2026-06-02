import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { JsonElement } from '../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export interface ComponentRewriter extends Object{
    handleShowItem(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): void;
    passthroughAndProcess(arg0: PacketWrapper): void;
    processTag(arg0: UserConnection, arg1: Tag): void;
    processText(arg0: UserConnection, arg1: JsonElement): void;
    processText(arg0: UserConnection, arg1: string): JsonElement;
}