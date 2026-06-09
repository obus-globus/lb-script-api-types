import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ClientboundPacketType } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { ServerboundPacketType } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface VersionedPacketTransformer<C extends ClientboundPacketType, S extends ServerboundPacketType> extends Object {
    scheduleSend(arg0: UserConnection, arg1: C, arg2: (param0: PacketWrapper) => void): boolean;
    scheduleSend(arg0: UserConnection, arg1: S, arg2: (param0: PacketWrapper) => void): boolean;
    scheduleSend(arg0: PacketWrapper): boolean;
    send(arg0: UserConnection, arg1: C, arg2: (param0: PacketWrapper) => void): boolean;
    send(arg0: UserConnection, arg1: S, arg2: (param0: PacketWrapper) => void): boolean;
    send(arg0: PacketWrapper): boolean;
    transform(arg0: UserConnection, arg1: C, arg2: (param0: PacketWrapper) => void): PacketWrapper;
    transform(arg0: UserConnection, arg1: S, arg2: (param0: PacketWrapper) => void): PacketWrapper;
    transform(arg0: PacketWrapper): PacketWrapper;
}