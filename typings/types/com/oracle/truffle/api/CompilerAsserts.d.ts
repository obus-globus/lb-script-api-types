import type { Object } from '../../../../java/lang/Object.d.ts'
export class CompilerAsserts extends Object {
    static compilationConstant<T extends unknown>(paramvalue: Object): void;
    static neverPartOfCompilation(): void;
    static neverPartOfCompilation(parammessage: string): void;
    static partialEvaluationConstant<T extends unknown>(paramvalue: boolean): void;
    static partialEvaluationConstant<T extends unknown>(paramvalue: number): void;
    static partialEvaluationConstant<T extends unknown>(paramvalue: Object): void;
    private constructor()
}