import type { StringTag } from '../../../../../../com/viaversion/nbt/tag/StringTag.d.ts'
import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BackwardsProtocol } from '../../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { NBTComponentRewriter } from '../../../../../../com/viaversion/viabackwards/api/rewriters/text/NBTComponentRewriter.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { JsonObject } from '../../../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { ClientboundPacket1_21_5 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_4to1_21_5/packet/ClientboundPacket1_21_5.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class ComponentRewriter1_21_5 extends NBTComponentRewriter<ClientboundPacket1_21_5> {
    constructor(arg0: BackwardsProtocol<ClientboundPacket1_21_5, Object, Object, Object>)
    // private handleAdventureModePredicate(arg0: Map$Entry<string, Tag>[], arg1: string, arg2: string[]): void;
    // private handleEnchantments(arg0: Map$Entry<string, Tag>[], arg1: string, arg2: string[]): void;
    handleHoverEvent(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): void;
    handleHoverEvent(arg0: UserConnection, arg1: JsonObject): void;
    handleShowItem(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): void;
    handleShowItem(arg0: UserConnection, arg1: Map$Entry<string, Tag>[], arg2: Map$Entry<string, Tag>[]): void;
    handleWrittenBookContents(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): void;
    // private insertUglyJson(arg0: Map$Entry<string, Tag>[], arg1: UserConnection): void;
    // private insertUglyJson(arg0: Map$Entry<string, Tag>[], arg1: string, arg2: UserConnection): void;
    processCompoundTag(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): void;
    toUglyJson(arg0: UserConnection, arg1: Tag): string;
    // private updateClickEvent(arg0: Map$Entry<string, Tag>[]): void;
    updateComponentList(arg0: UserConnection, arg1: Tag[]): StringTag[];
    // private updateDataComponents(arg0: Map$Entry<string, Tag>[]): void;
    // private updateShowEntityHover(arg0: Map$Entry<string, Tag>[]): void;
    // private updateShowInTooltip(arg0: Map$Entry<string, Tag>[], arg1: string, arg2: string[]): void;
    // private updateShowItemHover(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): void;
    // private updateShowTextHover(arg0: Map$Entry<string, Tag>[]): void;
}