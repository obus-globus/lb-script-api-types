import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class TrainingResult extends Object {
    constructor()
    readonly epoch: number;
    readonly evaluations: JavaMap<string, number>;
    getEpoch(): number;
    getEvaluations(): JavaMap<string, number>;
    getTrainEvaluation(arg0: string): number;
    getTrainLoss(): number;
    getValidateEvaluation(arg0: string): number;
    getValidateLoss(): number;
    setEpoch(arg0: number): void;
    setEvaluations(arg0: JavaMap<string, number>): void;
    toString(): string;
}