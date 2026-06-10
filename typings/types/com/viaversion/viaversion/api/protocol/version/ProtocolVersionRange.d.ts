import type { Range } from '../../../../../../com/google/common/collect/Range.d.ts'
import type { ProtocolVersion } from '../../../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ProtocolVersionRange extends Object {
    static all(): ProtocolVersionRange;
    static andNewer(paramarg0: ProtocolVersion): ProtocolVersionRange;
    static andOlder(paramarg0: ProtocolVersion): ProtocolVersionRange;
    static fromString(paramarg0: string): ProtocolVersionRange;
    static of(paramarg0: Range<ProtocolVersion>): ProtocolVersionRange;
    static of(paramarg0: ProtocolVersion, paramarg1: ProtocolVersion): ProtocolVersionRange;
    static of(paramarg0: Range<ProtocolVersion>[]): ProtocolVersionRange;
    static singleton(paramarg0: ProtocolVersion): ProtocolVersionRange;
    private constructor(arg0: Range<ProtocolVersion>[])
    // private ranges: Range<ProtocolVersion>[];
    add(arg0: Range<ProtocolVersion>): ProtocolVersionRange;
    add(arg0: ProtocolVersionRange): ProtocolVersionRange;
    contains(arg0: ProtocolVersion): boolean;
    equals(arg0: Object | null): boolean;
    getMax(): ProtocolVersion;
    getMin(): ProtocolVersion;
    hashCode(): number;
    toString(): string;
}