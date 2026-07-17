import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
export class Team$CollisionRule extends Enum<Team$CollisionRule> implements StringRepresentable {
    static ALWAYS: Team$CollisionRule;
    static CODEC: Codec<Team$CollisionRule>;
    static NEVER: Team$CollisionRule;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static PUSH_OTHER_TEAMS: Team$CollisionRule;
    static PUSH_OWN_TEAM: Team$CollisionRule;
    static STREAM_CODEC: StreamCodec<ByteBuf, Team$CollisionRule>;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Team$CollisionRule;
    static values(): Team$CollisionRule[];
    private constructor(name: string, id: number)
    id: number;
    name: string;
    getDisplayName(): Component;
    getSerializedName(): string;
}