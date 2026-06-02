import type { Input } from '../../../../ai/djl/modality/Input.d.ts'
import type { Image } from '../../../../ai/djl/modality/cv/Image.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class VisionLanguageInput extends Object {
    static parseInput(paramarg0: Input): VisionLanguageInput;
    constructor(arg0: Image, arg1: string[])
    constructor(arg0: Image, arg1: string)
    constructor(arg0: Image, arg1: string, arg2: string[], arg3: string)
    readonly candidates: string[];
    readonly hypothesisTemplate: string;
    readonly image: Image;
    readonly text: string;
    getCandidates(): string[];
    getHypothesisTemplate(): string;
    getImage(): Image;
    getText(): string;
    setCandidates(arg0: string[]): void;
    setHypothesisTemplate(arg0: string): void;
    setImage(arg0: Image): void;
    setText(arg0: string): void;
}