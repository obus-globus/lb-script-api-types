import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
import type { Abilities } from '../../../../net/minecraft/world/entity/player/Abilities.d.ts'
export class GameType extends Enum<GameType> implements StringRepresentable {
    static ADVENTURE: GameType;
    static CODEC: StringRepresentable$EnumCodec<GameType>;
    static CREATIVE: GameType;
    static DEFAULT_MODE: GameType;
    static LEGACY_ID_CODEC: Codec<GameType>;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static SPECTATOR: GameType;
    static STREAM_CODEC: StreamCodec<ByteBuf, GameType>;
    static SURVIVAL: GameType;
    static byId(paramid: number): GameType;
    static byName(paramname: string): GameType;
    static byName(paramname: string, paramdefaultMode: GameType): GameType;
    static byNullableId(paramid: number): GameType;
    static getNullableId(paramgameType: GameType): number;
    static isValidId(paramid: number): boolean;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): GameType;
    static values(): GameType[];
    private constructor(id: number, name: string)
    readonly id: number;
    // private longName: Component;
    // private shortName: Component;
    getId(): number;
    getLongDisplayName(): Component;
    getName(): string;
    getSerializedName(): string;
    getShortDisplayName(): Component;
    isBlockPlacingRestricted(): boolean;
    isCreative(): boolean;
    isSurvival(): boolean;
    updatePlayerAbilities(abilities: Abilities): void;
    name(): "SURVIVAL" | "CREATIVE" | "ADVENTURE" | "SPECTATOR";
}