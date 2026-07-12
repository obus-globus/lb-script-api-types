import type { StringTag } from '../../../../../com/viaversion/nbt/tag/StringTag.d.ts'
import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { StructuredDataKey } from '../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataKey.d.ts'
import type { Protocol } from '../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ClientboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { ComponentRewriter } from '../../../../../com/viaversion/viaversion/api/rewriter/ComponentRewriter.d.ts'
import type { JsonElement } from '../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { JsonObject } from '../../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { ComponentRewriterBase$ReadType } from '../../../../../com/viaversion/viaversion/rewriter/text/ComponentRewriterBase$ReadType.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export abstract class ComponentRewriterBase<C extends ClientboundPacketType> extends Object implements ComponentRewriter {
    constructor(arg0: Protocol<C, any, any, any>, arg1: ComponentRewriterBase$ReadType)
    // private protocol: Protocol<C, any, any, any>;
    // private type: ComponentRewriterBase$ReadType;
    handleAttributeModifiers(arg0: Map$Entry<string, Tag>[]): void;
    handleContainerContents(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): void;
    handleHoverEvent(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): void;
    handleHoverEvent(arg0: UserConnection, arg1: JsonObject): void;
    handleItemArrayContents(arg0: UserConnection, arg1: Map$Entry<string, Tag>[], arg2: string): void;
    handleLore(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): void;
    handleNestedComponent(arg0: UserConnection, arg1: Tag): void;
    handleShowItem(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): void;
    handleShowItem(arg0: UserConnection, arg1: Map$Entry<string, Tag>[], arg2: Map$Entry<string, Tag>[]): void;
    handleTranslate(arg0: UserConnection, arg1: Map$Entry<string, Tag>[], arg2: StringTag): void;
    handleTranslate(arg0: JsonObject, arg1: string): void;
    handleWrittenBookContents(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): void;
    hoverEventKey(): string;
    passthroughAndProcess(arg0: PacketWrapper): void;
    passthroughAndProcessOptional(arg0: PacketWrapper): void;
    processCompoundTag(arg0: UserConnection, arg1: Map$Entry<string, Tag>[]): void;
    processJsonArray(arg0: UserConnection, arg1: JsonElement[]): void;
    processJsonObject(arg0: UserConnection, arg1: JsonObject): void;
    // private processListTag(arg0: UserConnection, arg1: Tag[]): void;
    processTag(arg0: UserConnection, arg1: Tag): void;
    processText(arg0: UserConnection, arg1: JsonElement): void;
    processText(arg0: UserConnection, arg1: string): JsonElement;
    registerBossEvent(arg0: C): void;
    registerComponentPacket(arg0: C): void;
    registerDisguisedChat(arg0: C): void;
    registerLoginDisconnect(): void;
    registerOpenScreen1_14(arg0: C): void;
    registerPlayerCombatKill1_20(arg0: C): void;
    registerPlayerInfoUpdate1_21_4(arg0: C): void;
    registerSetObjective(arg0: C): void;
    registerSetPlayerTeam1_13(arg0: C): void;
    registerSetPlayerTeam1_21_5(arg0: C): void;
    registerSetPlayerTeam26_2(arg0: C): void;
    registerSetScore1_20_3(arg0: C): void;
    registerTabList(arg0: C): void;
    // private removeDataComponent(arg0: Map$Entry<string, Tag>[], arg1: string): boolean;
    removeDataComponents(arg0: Map$Entry<string, Tag>[], ...arg1: StructuredDataKey<Object>[]): void;
    removeDataComponents(arg0: Map$Entry<string, Tag>[], ...arg1: string[]): void;
    removeDataComponents(arg0: Map$Entry<string, Tag>[], arg1: StructuredDataKey<Object>[]): void;
}