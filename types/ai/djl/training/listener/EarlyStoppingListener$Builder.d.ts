import type { EarlyStoppingListener } from '../../../../ai/djl/training/listener/EarlyStoppingListener.d.ts'
import type { Duration } from '../../../../java/time/Duration.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EarlyStoppingListener$Builder extends Object {
    constructor()
    // private earlyStopPctImprovement: number;
    // private epochPatience: number;
    // private maxMillis: number;
    // private minEpochs: number;
    // private monitoredMetric: string;
    // private objectiveSuccess: number;
    build(): EarlyStoppingListener;
    optEarlyStopPctImprovement(arg0: number): EarlyStoppingListener$Builder;
    optEpochPatience(arg0: number): EarlyStoppingListener$Builder;
    optMaxDuration(arg0: Duration): EarlyStoppingListener$Builder;
    optMaxMillis(arg0: number): EarlyStoppingListener$Builder;
    optMinEpochs(arg0: number): EarlyStoppingListener$Builder;
    optMonitoredMetric(arg0: string): EarlyStoppingListener$Builder;
}