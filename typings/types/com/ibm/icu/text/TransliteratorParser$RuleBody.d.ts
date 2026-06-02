import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class TransliteratorParser$RuleBody extends Object {
    private constructor()
    handleNextLine(): string;
    nextLine(): string;
    reset(): void;
}