import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class TextSource extends Object {
    constructor()
    readonly resultIndex: number;
    readonly score: number;
    readonly text: string;
    getLength(): number;
    getResultIndex(): number;
    getScore(): number;
    getText(): string;
    getTextFromSource(): string;
    invalidateText(): void;
    setResultIndex(arg0: number): void;
    setScore(arg0: number): void;
}