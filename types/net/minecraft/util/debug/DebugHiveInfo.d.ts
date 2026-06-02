import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BeehiveBlockEntity } from '../../../../net/minecraft/world/level/block/entity/BeehiveBlockEntity.d.ts'
export class DebugHiveInfo extends Record {
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, DebugHiveInfo>;
    static pack(parambeehive: BeehiveBlockEntity): DebugHiveInfo;
    // private honeyLevel: number;
    // private occupantCount: number;
    // private sedated: boolean;
    // private type: Block;
    equals(o: Object | null): boolean;
    hashCode(): number;
    honeyLevel(): number;
    occupantCount(): number;
    sedated(): boolean;
    toString(): string;
    type(): Block;
}