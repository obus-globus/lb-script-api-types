import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Instant } from '../../../../../java/time/Instant.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { GuiMessageTag } from '../../../../../net/minecraft/client/multiplayer/chat/GuiMessageTag.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { PlayerChatMessage } from '../../../../../net/minecraft/network/chat/PlayerChatMessage.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class ChatTrustLevel extends Enum<ChatTrustLevel> implements StringRepresentable {
    static CODEC: Codec<ChatTrustLevel>;
    static MODIFIED: ChatTrustLevel;
    static NOT_SECURE: ChatTrustLevel;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static SECURE: ChatTrustLevel;
    static evaluate(parammessage: PlayerChatMessage, paramdecoratedMessage: Component, paramreceived: Instant): ChatTrustLevel;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ChatTrustLevel;
    static values(): ChatTrustLevel[];
    private constructor(serializedName: string)
    readonly serializedName: string;
    createTag(message: PlayerChatMessage): GuiMessageTag;
    getSerializedName(): string;
    isNotSecure(): boolean;
    name(): "SECURE" | "MODIFIED" | "NOT_SECURE";
}