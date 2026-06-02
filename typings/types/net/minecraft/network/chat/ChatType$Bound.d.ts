import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { ChatType } from '../../../../net/minecraft/network/chat/ChatType.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class ChatType$Bound extends Record {
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ChatType$Bound>;
    private constructor(chatType: Holder<ChatType>, name: Component)
    constructor(chatType: Holder<ChatType>, name: Component, targetName: Optional<Component>)
    // private chatType: Holder<ChatType>;
    // private name: Component;
    // private targetName: Optional<Component>;
    chatType(): Holder<ChatType>;
    decorate(content: Component): Component;
    decorateNarration(content: Component): Component;
    equals(o: Object | null): boolean;
    hashCode(): number;
    name(): Component;
    targetName(): Optional<Component>;
    toString(): string;
    withTargetName(targetName: Component): ChatType$Bound;
}