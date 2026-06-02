import type { UserConnection } from '../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ProtocolVersion } from '../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { AttributeKey } from '../../../../io/netty/util/AttributeKey.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Connection } from '../../../../net/minecraft/network/Connection.d.ts'
export class ProtocolTranslator extends Object {
    static AUTO_DETECT_PROTOCOL: ProtocolVersion;
    static CLIENT_CONNECTION_ATTRIBUTE_KEY: AttributeKey<Connection>;
    static NATIVE_VERSION: ProtocolVersion;
    static TARGET_VERSION_ATTRIBUTE_KEY: AttributeKey<ProtocolVersion>;
    static VIA_FLOW_CONTROL: string;
    static createDummyUserConnection(paramarg0: ProtocolVersion, paramarg1: ProtocolVersion): UserConnection;
    static getPlayNetworkUserConnection(): UserConnection;
    static getTargetVersion(): ProtocolVersion;
    static getTargetVersion(paramarg0: Channel): ProtocolVersion;
    static init(paramarg0: Path[][]): CompletableFuture<void>;
    static injectPreviousVersionReset(paramarg0: Channel): void;
    static injectViaPipeline(paramarg0: Connection, paramarg1: Channel): void;
    static setTargetVersion(paramarg0: ProtocolVersion): void;
    static setTargetVersion(paramarg0: ProtocolVersion, paramarg1: boolean): void;
    constructor()
}