import type { Ticker } from '../../../../io/netty/util/concurrent/Ticker.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface MockTicker extends Ticker, Object{
    advance(arg0: number, arg1: TimeUnit): void;
    advanceMillis(arg0: number): void;
    initialNanoTime(): number;
    nanoTime(): number;
    sleep(arg0: number, arg1: TimeUnit): void;
    sleepMillis(arg0: number): void;
}