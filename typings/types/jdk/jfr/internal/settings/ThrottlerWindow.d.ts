import type { AtomicLong } from '../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { ThrottlerParameters } from '../../../../jdk/jfr/internal/settings/ThrottlerParameters.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ThrottlerWindow extends Object {
    constructor()
    // private endTicks: number;
    // private measuredPopulationSize: AtomicLong;
    // private parameters: ThrottlerParameters;
    // private projectedPopulationSize: number;
    // private samplingInterval: number;
    accumulatedDebt(): number;
    debt(): number;
    initialize(arg0: ThrottlerParameters): void;
    isExpired(arg0: number): boolean;
    maxSampleSize(): number;
    populationSize(): number;
    sample(): boolean;
    sampleSize(): number;
    toString(): string;
}