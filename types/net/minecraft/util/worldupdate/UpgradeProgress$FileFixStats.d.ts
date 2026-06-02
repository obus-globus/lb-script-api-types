import type { AtomicInteger } from '../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UpgradeProgress$FileFixStats extends Object {
    constructor()
    // private finishedOperations: AtomicInteger;
    // private totalOperations: AtomicInteger;
    finishedOperations(): number;
    getProgress(): number;
    reset(): void;
    totalOperations(): number;
}