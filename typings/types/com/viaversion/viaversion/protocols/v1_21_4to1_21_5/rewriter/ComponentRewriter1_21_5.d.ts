import type { StringTag } from '../../../../../../com/viaversion/nbt/tag/StringTag.d.ts'
import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { JsonObject } from '../../../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { Protocol1_21_4To1_21_5 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_4to1_21_5/Protocol1_21_4To1_21_5.d.ts'
import type { ClientboundPacket1_21_2 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21to1_21_2/packet/ClientboundPacket1_21_2.d.ts'
import type { JsonNBTComponentRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/text/JsonNBTComponentRewriter.d.ts'
import type { SerializerVersion } from '../../../../../../com/viaversion/viaversion/util/SerializerVersion.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class ComponentRewriter1_21_5 extends JsonNBTComponentRewriter<ClientboundPacket1_21_2> {
    constructor(arg0: Protocol1_21_4To1_21_5)
    // private handleAdventureModePredicate(arg0: Map$Entry<string, Tag>[], arg1: string): void;
    // private handleEnchantments(arg0: Map$Entry<string, Tag>[], arg1: string): void;
    handleHoverEvent(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): void;
    handleHoverEvent(arg0: UserConnection, arg1: JsonObject): void;
    handleShowItem(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): void;
    handleShowItem(arg0: UserConnection, arg1: Map$Entry<string, Tag>[], arg2: Map$Entry<string, Tag>[]): void;
    handleWrittenBookContents(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): void;
    inputSerializerVersion(): SerializerVersion;
    processCompoundTag(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): void;
    uglyJsonToTag(arg0: UserConnection, arg1: string): Tag;
    uglyJsonToTagUncaught(arg0: UserConnection, arg1: string): Tag;
    // private updateClickEvent(arg0: Map$Entry<string, Tag>[]): void;
    updateComponentList(arg0: UserConnection, arg1: StringTag[], arg2: boolean): Map$Entry<string, Tag>[][];
    // private updateHiddenComponents(arg0: Map$Entry<string, Tag>[], arg1: string, arg2: StringTag[]): void;
    // private updateShowEntityHover(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): void;
    // private updateShowItemHover(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): void;
    // private updateShowTextHover(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): void;
    // private updateUglyJson(arg0: Map$Entry<string, Tag>[], arg1: UserConnection): void;
    // private updateUglyJson(arg0: Map$Entry<string, Tag>[], arg1: string, arg2: UserConnection): void;
}