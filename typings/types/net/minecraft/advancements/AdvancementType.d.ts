import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../com/mojang/serialization/Keyable.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { ChatFormatting } from '../../../net/minecraft/ChatFormatting.d.ts'
import type { AdvancementHolder } from '../../../net/minecraft/advancements/AdvancementHolder.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { ServerPlayer } from '../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { StringRepresentable } from '../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
export class AdvancementType extends Enum<AdvancementType> implements StringRepresentable {
    static CHALLENGE: AdvancementType;
    static CODEC: Codec<AdvancementType>;
    static GOAL: AdvancementType;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static TASK: AdvancementType;
    static createNameLookup(paramvalueArray: (StringRepresentable | null)[]): (param0: string) => StringRepresentable | null;
    static createNameLookup(paramvalueArray: (Object | null)[], paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => (Object | null)[]): StringRepresentable$EnumCodec<any>;
    static fromEnumWithMapping(paramvalues: () => (Object | null)[], paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<any>;
    static fromValues(paramvalues: () => (StringRepresentable | null)[]): Codec<StringRepresentable>;
    static keys(paramvalues: StringRepresentable[]): Keyable;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
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