import type { ProtocolPathKey } from '../../../../com/viaversion/viaversion/api/protocol/ProtocolPathKey.d.ts'
import type { ProtocolVersion } from '../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ProtocolPathKeyImpl extends Record implements ProtocolPathKey {
    constructor(clientProtocolVersion: ProtocolVersion, serverProtocolVersion: ProtocolVersion)
    // private clientProtocolVersion: ProtocolVersion;
    // private serverProtocolVersion: ProtocolVersion;
    clientProtocolVersion(): ProtocolVersion;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    serverProtocolVersion(): ProtocolVersion;
    toString(): string;
}