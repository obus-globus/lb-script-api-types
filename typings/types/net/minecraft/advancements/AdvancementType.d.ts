import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { ChatFormatting } from '../../../net/minecraft/ChatFormatting.d.ts'
import type { AdvancementHolder } from '../../../net/minecraft/advancements/AdvancementHolder.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { ServerPlayer } from '../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { StringRepresentable } from '../../../net/minecraft/util/StringRepresentable.d.ts'
export class AdvancementType extends Enum<AdvancementType> implements StringRepresentable {
    static CHALLENGE: AdvancementType;
    static CODEC: Codec<AdvancementType>;
    static GOAL: AdvancementType;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static TASK: AdvancementType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): AdvancementType;
    static values(): AdvancementType[];
    private constructor(name: string, chatColor: ChatFormatting)
    readonly chatColor: ChatFormatting;
    readonly displayName: Component;
    // private name: string;
    createAnnouncement(holder: AdvancementHolder, player: ServerPlayer): MutableComponent;
    getChatColor(): ChatFormatting;
    getDisplayName(): Component;
    getSerializedName(): string;
    name(): "TASK" | "CHALLENGE" | "GOAL";
}