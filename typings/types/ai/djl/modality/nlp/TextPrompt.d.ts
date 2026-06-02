import type { Input } from '../../../../ai/djl/modality/Input.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TextPrompt extends Object {
    static parseInput(paramarg0: Input): TextPrompt;
    private constructor(arg0: string)
    private constructor(arg0: string[])
    readonly batch: string[];
    readonly text: string;
    getBatch(): string[];
    getText(): string;
    isBatch(): boolean;
}