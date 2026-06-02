import type { Ticker } from '../../../../com/google/common/base/Ticker.d.ts'
import type { Duration } from '../../../../java/time/Duration.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Stopwatch extends Object {
    static createStarted(): Stopwatch;
    static createStarted(paramticker: Ticker): Stopwatch;
    static createUnstarted(): Stopwatch;
    static createUnstarted(paramticker: Ticker): Stopwatch;
    constructor()
    constructor(ticker: Ticker)
    // private elapsedNanos: number;
    // private isRunning: boolean;
    // private startTick: number;
    // private ticker: Ticker;
    elapsed(): Duration;
    elapsed(desiredUnit: TimeUnit): number;
    // private elapsedNanos(): number;
    isRunning(): boolean;
    reset(): Stopwatch;
    start(): Stopwatch;
    stop(): Stopwatch;
    toString(): string;
}