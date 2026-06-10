import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryAccess } from '../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { BootstrapContext } from '../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { ChatType$Bound } from '../../../../net/minecraft/network/chat/ChatType$Bound.d.ts'
import type { ChatTypeDecoration } from '../../../../net/minecraft/network/chat/ChatTypeDecoration.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
export class ChatType extends Record {
    static CHAT: ResourceKey<ChatType>;
    static DEFAULT_CHAT_DECORATION: ChatTypeDecoration;
    static DIRECT_CODEC: Codec<ChatType>;
    static DIRECT_STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ChatType>;
    static EMOTE_COMMAND: ResourceKey<ChatType>;
    static MSG_COMMAND_INCOMING: ResourceKey<ChatType>;
    static MSG_COMMAND_OUTGOING: ResourceKey<ChatType>;
    static SAY_COMMAND: ResourceKey<ChatType>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Holder<ChatType>>;
    static TEAM_MSG_COMMAND_INCOMING: ResourceKey<ChatType>;
    static TEAM_MSG_COMMAND_OUTGOING: ResourceKey<ChatType>;
    static bind(paramchatType: ResourceKey<ChatType>, paramsource: CommandSourceStack): ChatType$Bound;
    static bind(paramchatType: ResourceKey<ChatType>, paramregistryAccess: RegistryAccess, paramname: Component): ChatType$Bound;
    static bind(paramchatType: ResourceKey<ChatType>, paramentity: Entity): ChatType$Bound;
    static bootstrap(paramcontext: BootstrapContext<ChatType>): void;
    constructor(chat: ChatTypeDecoration, narration: ChatTypeDecoration)
    // private chat: ChatTypeDecoration;
    // private narration: ChatTypeDecoration;
    chat(): ChatTypeDecoration;
    equals(o: Object | null): boolean;
    hashCode(): number;
    narration(): ChatTypeDecoration;
    toString(): string;
}