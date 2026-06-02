import type { Object } from '../../../java/lang/Object.d.ts'
export class TrainingResult extends Object {
    constructor()
    readonly epoch: number;
    readonly evaluations: { [key: string]: number };
    getEpoch(): number;
    getEvaluations(): { [key: string]: number };
    getTrainEvaluation(arg0: string): number;
    getTrainLoss(): number;
    getValidateEvaluation(arg0: string): number;
    getValidateLoss(): number;
    setEpoch(arg0: number): void;
    setEvaluations(arg0: { [key: string]: number }): void;
    toString(): string;
}