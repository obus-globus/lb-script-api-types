import type { LibGraalIsolate } from '../../../../../../com/oracle/truffle/runtime/hotspot/libgraal/LibGraalIsolate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class LibGraalObject extends Object {
    constructor(handle: number)
    readonly handle: number;
    // private isolate: LibGraalIsolate;
    getHandle(): number;
    toString(): string;
}