import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { NumberFormat } from '../../../../../net/minecraft/network/chat/numbers/NumberFormat.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { Objective } from '../../../../../net/minecraft/world/scores/Objective.d.ts'
import type { ObjectiveCriteria$RenderType } from '../../../../../net/minecraft/world/scores/criteria/ObjectiveCriteria$RenderType.d.ts'
export class ClientboundSetObjectivePacket extends Object implements Packet<ClientGamePacketListener> {
    static METHOD_ADD: number;
    static METHOD_CHANGE: number;
    static METHOD_REMOVE: number;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ClientboundSetObjectivePacket>;
    constructor(objective: Objective, method: number)
    readonly displayName: Component;
    readonly method: number;
    readonly numberFormat: Optional<NumberFormat>;
    readonly objectiveName: string;
    readonly renderType: ObjectiveCriteria$RenderType;
    getDisplayName(): Component;
    getMethod(): number;
    getNumberFormat(): Optional<NumberFormat>;
    getObjectiveName(): string;
    getRenderType(): ObjectiveCriteria$RenderType;
    handle(listener: ClientGamePacketListener): void;
    isSkippable(): boolean;
    isTerminal(): boolean;
    type(): PacketType<ClientboundSetObjectivePacket>;
    // private write(output: RegistryFriendlyByteBuf): void;
}