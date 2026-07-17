import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
export class Team$Visibility extends Enum<Team$Visibility> implements StringRepresentable {
    static ALWAYS: Team$Visibility;
    static CODEC: Codec<Team$Visibility>;
    static HIDE_FOR_OTHER_TEAMS: Team$Visibility;
    static HIDE_FOR_OWN_TEAM: Team$Visibility;
    static NEVER: Team$Visibility;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static STREAM_CODEC: StreamCodec<ByteBuf, Team$Visibility>;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Team$Visibility;
    static values(): Team$Visibility[];
    private constructor(name: string, id: number)
    id: number;
    name: string;
    getDisplayName(): Component;
    getSerializedName(): string;
}