import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../../com/mojang/serialization/Keyable.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Instant } from '../../../../../java/time/Instant.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { GuiMessageTag } from '../../../../../net/minecraft/client/multiplayer/chat/GuiMessageTag.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { PlayerChatMessage } from '../../../../../net/minecraft/network/chat/PlayerChatMessage.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
export class ChatTrustLevel extends Enum<ChatTrustLevel> implements StringRepresentable {
    static CODEC: Codec<ChatTrustLevel>;
    static MODIFIED: ChatTrustLevel;
    static NOT_SECURE: ChatTrustLevel;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static SECURE: ChatTrustLevel;
    static createNameLookup<T extends StringRepresentable>(paramvalueArray: T[]): (param0: string) => T;
    static createNameLookup<T extends unknown>(paramvalueArray: T[], paramconverter: (param0: T) => string): (param0: string) => T;
    static evaluate(parammessage: PlayerChatMessage, paramdecoratedMessage: Component, paramreceived: Instant): ChatTrustLevel;
    static fromEnum<E extends Enum<E> & StringRepresentable>(paramvalues: () => E[]): StringRepresentable$EnumCodec<E>;
    static fromEnumWithMapping<E extends Enum<E> & StringRepresentable>(paramvalues: () => E[], paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<E>;
    static fromValues<T extends StringRepresentable>(paramvalues: () => T[]): Codec<T>;
    static keys(paramvalues: StringRepresentable[]): Keyable;
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