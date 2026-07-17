import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ReentrantLock } from '../../../../../java/util/concurrent/locks/ReentrantLock.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class JSAgentWaiterList extends Object {
    constructor()
    // private atomicSection: ReentrantLock;
    // private waiters: JavaMap<number, (Object | null)[]>;
    enterAtomicSection(): void;
    getListForIndex(indexPos: number): (Object | null)[];
    inAtomicSection(): boolean;
    leaveAtomicSection(): void;
}