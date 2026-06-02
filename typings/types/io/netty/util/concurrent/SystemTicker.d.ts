import type { MockTicker } from '../../../../io/netty/util/concurrent/MockTicker.d.ts'
import type { Ticker } from '../../../../io/netty/util/concurrent/Ticker.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SystemTicker extends Object implements Ticker {
    static newMockTicker(): MockTicker;
    static systemTicker(): Ticker;
    constructor()
    initialNanoTime(): number;
    nanoTime(): number;
    sleep(arg0: number, arg1: TimeUnit): void;
    sleepMillis(arg0: number): void;
}