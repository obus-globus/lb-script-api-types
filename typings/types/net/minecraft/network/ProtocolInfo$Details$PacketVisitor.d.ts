import type { Object } from '../../../java/lang/Object.d.ts'
import type { PacketType } from '../../../net/minecraft/network/protocol/PacketType.d.ts'
export interface ProtocolInfo$Details$PacketVisitor extends Object{
    accept(type: PacketType<any>, networkId: number): void;
}