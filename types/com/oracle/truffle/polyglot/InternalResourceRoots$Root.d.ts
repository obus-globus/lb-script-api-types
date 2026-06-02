import type { InternalResourceCache } from '../../../../com/oracle/truffle/polyglot/InternalResourceCache.d.ts'
import type { InternalResourceRoots$Root$Kind } from '../../../../com/oracle/truffle/polyglot/InternalResourceRoots$Root$Kind.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class InternalResourceRoots$Root extends Record {
    constructor(path: Path[], kind: InternalResourceRoots$Root$Kind, resources: InternalResourceCache[])
    // private kind: InternalResourceRoots$Root$Kind;
    // private path: Path[];
    // private resources: InternalResourceCache[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    kind(): InternalResourceRoots$Root$Kind;
    path(): Path[];
    resources(): InternalResourceCache[];
    toString(): string;
}