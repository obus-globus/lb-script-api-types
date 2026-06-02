import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Ticker extends Object{
    initialNanoTime(): number;
    nanoTime(): number;
    sleep(arg0: number, arg1: TimeUnit): void;
    sleepMillis(arg0: number): void;
}