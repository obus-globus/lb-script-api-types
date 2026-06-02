import type { Random } from '../../../../java/util/Random.d.ts'
import type { ReentrantLock } from '../../../../java/util/concurrent/locks/ReentrantLock.d.ts'
import type { PlatformEventType } from '../../../../jdk/jfr/internal/PlatformEventType.d.ts'
import type { ThrottlerParameters } from '../../../../jdk/jfr/internal/settings/ThrottlerParameters.d.ts'
import type { ThrottlerWindow } from '../../../../jdk/jfr/internal/settings/ThrottlerWindow.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Throttler extends Object {
    constructor(arg0: PlatformEventType)
    // private accumulatedDebtCarryCount: number;
    // private accumulatedDebtCarryLimit: number;
    // private activeWindow: ThrottlerWindow;
    // private averagePopulationSize: number;
    // private disabled: boolean;
    // private ewmaPopulationSize: number;
    // private lastParameters: ThrottlerParameters;
    // private lock: ReentrantLock;
    // private periodMillis: number;
    // private randomGenerator: Random;
    // private sampleSize: number;
    // private update: boolean;
    // private window0: ThrottlerWindow;
    // private window1: ThrottlerWindow;
    // private amortizeDebt(arg0: ThrottlerWindow): number;
    // private computeAccumulatedDebtCarryLimit(arg0: ThrottlerParameters): number;
    // private computeEwmaAlphaCoefficient(arg0: number): number;
    // private configure(arg0: ThrottlerParameters): void;
    // private configure(arg0: ThrottlerParameters, arg1: ThrottlerWindow): ThrottlerWindow;
    configure(arg0: number, arg1: number): void;
    // private deriveSamplingInterval(arg0: number, arg1: ThrottlerWindow): number;
    // private exponentiallyWeightedMovingAverage(arg0: number, arg1: number, arg2: number): number;
    // private is_disabled(arg0: number): boolean;
    // private nextWindow(arg0: ThrottlerWindow): ThrottlerWindow;
    // private nextWindowParameters(): ThrottlerParameters;
    // private normalize(): void;
    // private projectPopulationSize(arg0: ThrottlerWindow): number;
    // private rotateWindow(arg0: number): void;
    sample(arg0: number): boolean;
    // private setRate(arg0: ThrottlerParameters, arg1: ThrottlerWindow): ThrottlerWindow;
    // private updateParameters(): ThrottlerParameters;
}