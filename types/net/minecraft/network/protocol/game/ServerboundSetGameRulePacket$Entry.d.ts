import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { GameRule } from '../../../../../net/minecraft/world/level/gamerules/GameRule.d.ts'
export class ServerboundSetGameRulePacket$Entry extends Record {
    static STREAM_CODEC: StreamCodec<ByteBuf, ServerboundSetGameRulePacket$Entry>;
    constructor(gameRuleKey: ResourceKey<GameRule<Object>>, value: string)
    // private gameRuleKey: ResourceKey<GameRule<Object>>;
    // private value: string;
    equals(o: Object | null): boolean;
    gameRuleKey(): ResourceKey<GameRule<Object>>;
    hashCode(): number;
    toString(): string;
    value(): string;
}