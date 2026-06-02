import type { ViaProviders } from '../../../../../com/viaversion/viaversion/api/platform/providers/ViaProviders.d.ts'
import type { AbstractProtocol } from '../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { Direction } from '../../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { State } from '../../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { PacketTypesProvider } from '../../../../../com/viaversion/viaversion/api/protocol/packet/provider/PacketTypesProvider.d.ts'
import type { BaseClientboundPacket } from '../../../../../com/viaversion/viaversion/protocols/base/packet/BaseClientboundPacket.d.ts'
import type { BaseServerboundPacket } from '../../../../../com/viaversion/viaversion/protocols/base/packet/BaseServerboundPacket.d.ts'
export class InitialBaseProtocol extends AbstractProtocol<BaseClientboundPacket, BaseClientboundPacket, BaseServerboundPacket, BaseServerboundPacket> {
    constructor()
    createPacketTypesProvider(): PacketTypesProvider<BaseClientboundPacket, BaseClientboundPacket, BaseServerboundPacket, BaseServerboundPacket>;
    isBaseProtocol(): boolean;
    register(arg0: ViaProviders): void;
    registerPackets(): void;
    transform(arg0: Direction, arg1: State, arg2: PacketWrapper): void;
}