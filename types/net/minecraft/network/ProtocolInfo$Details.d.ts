import type { Object } from '../../../java/lang/Object.d.ts'
import type { ConnectionProtocol } from '../../../net/minecraft/network/ConnectionProtocol.d.ts'
import type { ProtocolInfo$Details$PacketVisitor } from '../../../net/minecraft/network/ProtocolInfo$Details$PacketVisitor.d.ts'
import type { PacketFlow } from '../../../net/minecraft/network/protocol/PacketFlow.d.ts'
import type { PacketType } from '../../../net/minecraft/network/protocol/PacketType.d.ts'
export interface ProtocolInfo$Details extends Object{
    flow(): PacketFlow;
    id(): ConnectionProtocol;
    listPackets(output: (param0: PacketType<Object>, param1: number) => void): void;
}