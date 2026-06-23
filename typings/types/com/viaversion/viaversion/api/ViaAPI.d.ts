import type { UserConnection } from '../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { LegacyViaAPI } from '../../../../com/viaversion/viaversion/api/legacy/LegacyViaAPI.d.ts'
import type { ProtocolVersion } from '../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { ServerProtocolVersion } from '../../../../com/viaversion/viaversion/api/protocol/version/ServerProtocolVersion.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ViaAPI<T extends unknown> extends Object{
    apiVersion(): number;
    getConnection(arg0: UUID): UserConnection;
    getFullSupportedProtocolVersions(): ProtocolVersion[];
    getFullSupportedVersions(): number[];
    getPlayerProtocolVersion(arg0: T): ProtocolVersion;
    getPlayerProtocolVersion(arg0: UUID): ProtocolVersion;
    getPlayerVersion(arg0: T): number;
    getPlayerVersion(arg0: UUID): number;
    getServerVersion(): ServerProtocolVersion;
    getSupportedProtocolVersions(): ProtocolVersion[];
    getSupportedVersions(): number[];
    getVersion(): string;
    isInjected(arg0: UUID): boolean;
    legacyAPI(): LegacyViaAPI<T>;
    majorVersion(): number;
    sendRawPacket(arg0: T, arg1: ByteBuf): void;
    sendRawPacket(arg0: UUID, arg1: ByteBuf): void;
}