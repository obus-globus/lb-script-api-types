import type { LibGraalIsolate } from '../../../../../../com/oracle/truffle/runtime/hotspot/libgraal/LibGraalIsolate.d.ts'
import type { LibGraalScope$DetachAction } from '../../../../../../com/oracle/truffle/runtime/hotspot/libgraal/LibGraalScope$DetachAction.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class LibGraalScope$Shared extends Object {
    constructor(detachAction: LibGraalScope$DetachAction, isolate: LibGraalIsolate, isolateThread: number)
    // private detachAction: LibGraalScope$DetachAction;
    // private isolate: LibGraalIsolate;
    readonly isolateThread: number;
    detach(): number;
    getIsolateThread(): number;
    toString(): string;
}