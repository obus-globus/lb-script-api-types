import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ClientboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { PacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketType.d.ts'
import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { ServerboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { VersionedPacketTransformer } from '../../../../../com/viaversion/viaversion/api/protocol/packet/VersionedPacketTransformer.d.ts'
import type { ProtocolVersion } from '../../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class VersionedPacketTransformerImpl<C extends ClientboundPacketType, S extends ServerboundPacketType> extends Object implements VersionedPacketTransformer<C, S> {
    constructor(arg0: ProtocolVersion, arg1: Class<C>, arg2: Class<S>)
    // private clientboundPacketsClass: Class<C>;
    // private inputProtocolVersion: ProtocolVersion;
    // private serverboundPacketsClass: Class<S>;
    // private createAndSend(arg0: UserConnection, arg1: PacketType, arg2: (param0: PacketWrapper) => void): boolean;
    // private createAndTransform(arg0: UserConnection, arg1: PacketType, arg2: (param0: PacketWrapper) => void): PacketWrapper;
    // private scheduleCreateAndSend(arg0: UserConnection, arg1: PacketType, arg2: (param0: PacketWrapper) => void): boolean;
    scheduleSend(arg0: UserConnection, arg1: C, arg2: (param0: PacketWrapper) => void): boolean;
    scheduleSend(arg0: UserConnection, arg1: S, arg2: (param0: PacketWrapper) => void): boolean;
    scheduleSend(arg0: PacketWrapper): boolean;
    send(arg0: UserConnection, arg1: C, arg2: (param0: PacketWrapper) => void): boolean;
    send(arg0: UserConnection, arg1: S, arg2: (param0: PacketWrapper) => void): boolean;
    send(arg0: PacketWrapper): boolean;
    transform(arg0: UserConnection, arg1: C, arg2: (param0: PacketWrapper) => void): PacketWrapper;
    transform(arg0: UserConnection, arg1: S, arg2: (param0: PacketWrapper) => void): PacketWrapper;
    transform(arg0: PacketWrapper): PacketWrapper;
    // private transformAndSendPacket(arg0: PacketWrapper, arg1: boolean): boolean;
    // private transformPacket(arg0: PacketWrapper): void;
    // private validatePacket(arg0: PacketWrapper): void;
}