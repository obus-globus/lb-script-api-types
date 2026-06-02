import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class EvaluationResult extends Object {
    static createError(parame: Object): EvaluationResult;
    static createEvaluationSectionNotReached(): EvaluationResult;
    static createResult(paramresult: Object): EvaluationResult;
    static createUnknownExecutionTarget(): EvaluationResult;
    private constructor(result: Object, error: boolean, evaluationDone: boolean, unknownEcutionTarget: boolean)
    readonly error: boolean;
    readonly evaluationDone: boolean;
    readonly result: Object;
    readonly unknownEcutionTarget: boolean;
    getResult(): Object;
    isError(): boolean;
    isEvaluationDone(): boolean;
    isUnknownEcutionTarget(): boolean;
}