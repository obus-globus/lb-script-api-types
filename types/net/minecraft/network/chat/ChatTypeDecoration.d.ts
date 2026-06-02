import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { ChatType$Bound } from '../../../../net/minecraft/network/chat/ChatType$Bound.d.ts'
import type { ChatTypeDecoration$Parameter } from '../../../../net/minecraft/network/chat/ChatTypeDecoration$Parameter.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { Style } from '../../../../net/minecraft/network/chat/Style.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class ChatTypeDecoration extends Record {
    static CODEC: Codec<ChatTypeDecoration>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ChatTypeDecoration>;
    static incomingDirectMessage(paramtranslationKey: string): ChatTypeDecoration;
    static outgoingDirectMessage(paramtranslationKey: string): ChatTypeDecoration;
    static teamMessage(paramtranslationKey: string): ChatTypeDecoration;
    static withSender(paramtranslationKey: string): ChatTypeDecoration;
    constructor(translationKey: string, parameters: ChatTypeDecoration$Parameter[], style: Style)
    // private parameters: ChatTypeDecoration$Parameter[];
    // private style: Style;
    // private translationKey: string;
    decorate(content: Component, chatType: ChatType$Bound): Component;
    equals(o: Object | null): boolean;
    hashCode(): number;
    parameters(): ChatTypeDecoration$Parameter[];
    // private resolveParameters(content: Component, chatType: ChatType$Bound): Component[];
    style(): Style;
    toString(): string;
    translationKey(): string;
}