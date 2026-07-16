import type { Object } from '../../../../java/lang/Object.d.ts'
export class CompilerAsserts extends Object {
    static compilationConstant(paramvalue: Object): void;
    static neverPartOfCompilation(): void;
    static neverPartOfCompilation(parammessage: string): void;
    static partialEvaluationConstant(paramvalue: boolean): void;
    static partialEvaluationConstant(paramvalue: number): void;
    static partialEvaluationConstant(paramvalue: Object): void;
    private constructor()
}