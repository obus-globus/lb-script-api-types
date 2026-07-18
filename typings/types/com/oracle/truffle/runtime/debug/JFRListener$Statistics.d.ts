import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { AtomicLong } from '../../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class JFRListener$Statistics extends Object implements Runnable {
    constructor()
    // private bailouts: number;
    // private compiledCodeSize: number;
    // private compiledMethods: number;
    // private invalidations: AtomicLong;
    // private peakTime: number;
    // private totalTime: number;
    finishCompilation(time: number, bailout: boolean, codeSize: number): void;
    run(): void;
}