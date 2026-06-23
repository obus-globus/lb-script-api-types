import type { Protocol } from '../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ProtocolPathEntry } from '../../../../com/viaversion/viaversion/api/protocol/ProtocolPathEntry.d.ts'
import type { ProtocolVersion } from '../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ProtocolPathEntryImpl extends Record implements ProtocolPathEntry {
    constructor(outputProtocolVersion: ProtocolVersion, protocol: Protocol<any, any, any, any>)
    // private outputProtocolVersion: ProtocolVersion;
    // private protocol: Protocol<any, any, any, any>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    outputProtocolVersion(): ProtocolVersion;
    protocol(): Protocol<any, any, any, any>;
    toString(): string;
}