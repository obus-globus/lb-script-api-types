import type { LibGraalIsolate } from '../../../../../../com/oracle/truffle/runtime/hotspot/libgraal/LibGraalIsolate.d.ts'
import type { LibGraalScope$DetachAction } from '../../../../../../com/oracle/truffle/runtime/hotspot/libgraal/LibGraalScope$DetachAction.d.ts'
import type { LibGraalScope$Shared } from '../../../../../../com/oracle/truffle/runtime/hotspot/libgraal/LibGraalScope$Shared.d.ts'
import type { AutoCloseable } from '../../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class LibGraalScope extends Object implements AutoCloseable {
    static current(): LibGraalScope;
    static getIsolateThread(): number;
    constructor()
    constructor(detachAction: LibGraalScope$DetachAction)
    // private id: number;
    // private parent: LibGraalScope;
    // private shared: LibGraalScope$Shared;
    close(): void;
    getIsolate(): LibGraalIsolate;
    getIsolateThreadAddress(): number;
    toString(): string;
}