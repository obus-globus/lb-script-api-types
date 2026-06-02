import type { ThreadDeath } from '../../../../../java/lang/ThreadDeath.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class EvaluationResultException extends ThreadDeath {
    constructor(result: Object)
    constructor(result: Object, isError: boolean)
    // private isError: boolean;
    readonly result: Object;
    getResult(): Object;
    isError(): boolean;
}