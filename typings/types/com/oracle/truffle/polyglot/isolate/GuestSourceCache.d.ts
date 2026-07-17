import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { IsolateSourceCache } from '../../../../../com/oracle/truffle/polyglot/isolate/IsolateSourceCache.d.ts'
import type { AtomicInteger } from '../../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class GuestSourceCache extends Object implements IsolateSourceCache {
    constructor()
    // private sourceByHandle: JavaMap<number, Object>;
    // private sourceSequencer: AtomicInteger;
    getCachedSources(): Object[];
    release(handle: number): void;
    translate(source: Object): number;
    unhand(handle: number): Object;
}