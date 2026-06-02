import type { MockTicker } from '../../../../io/netty/util/concurrent/MockTicker.d.ts'
import type { Ticker } from '../../../../io/netty/util/concurrent/Ticker.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EmbeddedEventLoop$FreezableTicker extends Object implements MockTicker {
    constructor()
    // private frozenTimestamp: number;
    // private startTime: number;
    // private timeFrozen: boolean;
    // private unfrozen: Ticker;
    advance(arg0: number, arg1: TimeUnit): void;
    advanceMillis(arg0: number): void;
    freezeTime(): void;
    initialNanoTime(): number;
    nanoTime(): number;
    sleep(arg0: number, arg1: TimeUnit): void;
    unfreezeTime(): void;
}