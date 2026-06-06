import type { ProtocolInfo } from '../../../../com/viaversion/viaversion/api/connection/ProtocolInfo.d.ts'
import type { ProtocolPipeline } from '../../../../com/viaversion/viaversion/api/protocol/ProtocolPipeline.d.ts'
import type { Direction } from '../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { State } from '../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { ProtocolVersion } from '../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ProtocolInfoImpl extends Object implements ProtocolInfo {
    constructor()
    readonly clientState: State;
    readonly pipeline: ProtocolPipeline;
    readonly serverState: State;
    readonly username: string;
    readonly uuid: UUID;
    compressionEnabled(): boolean;
    getClientState(): State;
    getPipeline(): ProtocolPipeline;
    getProtocolVersion(): number;
    getServerProtocolVersion(): number;
    getServerState(): State;
    getState(arg0: Direction): State;
    getUsername(): string;
    getUuid(): UUID;
    protocolVersion(): ProtocolVersion;
    serverProtocolVersion(): ProtocolVersion;
    setClientState(arg0: State): void;
    setCompressionEnabled(arg0: boolean): void;
    setPipeline(arg0: ProtocolPipeline): void;
    setProtocolVersion(arg0: ProtocolVersion): void;
    setServerProtocolVersion(arg0: ProtocolVersion): void;
    setServerState(arg0: State): void;
    setState(arg0: State): void;
    setUsername(arg0: string): void;
    setUuid(arg0: UUID): void;
    toString(): string;
}