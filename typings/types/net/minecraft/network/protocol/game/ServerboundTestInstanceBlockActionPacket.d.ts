import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Vec3i } from '../../../../../net/minecraft/core/Vec3i.d.ts'
import type { GameTestInstance } from '../../../../../net/minecraft/gametest/framework/GameTestInstance.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ServerGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ServerGamePacketListener.d.ts'
import type { ServerboundTestInstanceBlockActionPacket$Action } from '../../../../../net/minecraft/network/protocol/game/ServerboundTestInstanceBlockActionPacket$Action.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Rotation } from '../../../../../net/minecraft/world/level/block/Rotation.d.ts'
import type { TestInstanceBlockEntity$Data } from '../../../../../net/minecraft/world/level/block/entity/TestInstanceBlockEntity$Data.d.ts'
export class ServerboundTestInstanceBlockActionPacket extends Record implements Packet<ServerGamePacketListener> {
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ServerboundTestInstanceBlockActionPacket>;
    constructor(pos: BlockPos, action: ServerboundTestInstanceBlockActionPacket$Action, test: Optional<ResourceKey<GameTestInstance>>, size: Vec3i, rotation: Rotation, ignoreEntities: boolean)
    constructor(pos: BlockPos, action: ServerboundTestInstanceBlockActionPacket$Action, data: TestInstanceBlockEntity$Data)
    // private action: ServerboundTestInstanceBlockActionPacket$Action;
    // private data: TestInstanceBlockEntity$Data;
    // private pos: BlockPos;
    action(): ServerboundTestInstanceBlockActionPacket$Action;
    data(): TestInstanceBlockEntity$Data;
    equals(o: Object | null): boolean;
    handle(listener: ServerGamePacketListener): void;
    hashCode(): number;
    isSkippable(): boolean;
    isTerminal(): boolean;
    pos(): BlockPos;
    toString(): string;
    type(): PacketType<ServerboundTestInstanceBlockActionPacket>;
}