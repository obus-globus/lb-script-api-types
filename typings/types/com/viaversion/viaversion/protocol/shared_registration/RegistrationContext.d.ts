import type { AbstractProtocol } from '../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { ClientboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { ServerboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { PacketHandler } from '../../../../../com/viaversion/viaversion/api/protocol/remapper/PacketHandler.d.ts'
import type { ProtocolVersion } from '../../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { PacketBound } from '../../../../../com/viaversion/viaversion/protocol/shared_registration/PacketBound.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class RegistrationContext<CU extends ClientboundPacketType, SU extends ServerboundPacketType> extends Record {
    constructor(protocol: AbstractProtocol<CU, any, any, SU>, min: ProtocolVersion, max: ProtocolVersion)
    // private max: ProtocolVersion;
    // private min: ProtocolVersion;
    // private protocol: AbstractProtocol<CU, any, any, SU>;
    castProtocol<P extends AbstractProtocol<CU, any, any, SU>>(): P;
    clientbound(arg0: ClientboundPacketType, arg1: (param0: CU) => void): void;
    clientbound(arg0: ClientboundPacketType, arg1: (param0: CU) => void, ...arg2: PacketBound[]): void;
    clientboundHandler(arg0: ClientboundPacketType, arg1: (param0: PacketWrapper) => void): void;
    clientboundHandler(arg0: ClientboundPacketType, arg1: (param0: PacketWrapper) => void, ...arg2: PacketBound[]): void;
    clientboundPacketType(arg0: ClientboundPacketType): CU;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    max(): ProtocolVersion;
    min(): ProtocolVersion;
    protocol(): AbstractProtocol<CU, any, any, SU>;
    protocol<P extends AbstractProtocol<CU, any, any, SU>>(arg0: Class<P>): P;
    serverbound(arg0: ServerboundPacketType, arg1: (param0: SU) => void): void;
    serverbound(arg0: ServerboundPacketType, arg1: (param0: SU) => void, ...arg2: PacketBound[]): void;
    serverboundHandler(arg0: ServerboundPacketType, arg1: (param0: PacketWrapper) => void): void;
    serverboundHandler(arg0: ServerboundPacketType, arg1: (param0: PacketWrapper) => void, ...arg2: PacketBound[]): void;
    serverboundPacketType(arg0: ServerboundPacketType): SU;
    // private shouldSkip(...arg0: PacketBound[]): boolean;
    toString(): string;
}