import type { Protocol } from '../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ClientboundPacketType } from '../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { ServerboundPacketType } from '../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { ProtocolVersion } from '../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ProtocolManagerImpl$PathNode extends Record {
    private constructor(parent: ProtocolManagerImpl$PathNode, version: ProtocolVersion, protocol: Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>, depth: number)
    // private depth: number;
    // private parent: ProtocolManagerImpl$PathNode;
    // private protocol: Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>;
    // private version: ProtocolVersion;
    depth(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    parent(): ProtocolManagerImpl$PathNode;
    protocol(): Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>;
    toString(): string;
    version(): ProtocolVersion;
}