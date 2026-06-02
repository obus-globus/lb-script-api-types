import type { Input } from '../../../../../ai/djl/modality/Input.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ZeroShotClassificationInput extends Object {
    static parseInput(paramarg0: Input): ZeroShotClassificationInput;
    constructor(arg0: string, arg1: string[])
    constructor(arg0: string, arg1: string[], arg2: boolean)
    constructor(arg0: string, arg1: string[], arg2: boolean, arg3: string)
    readonly candidates: string[];
    readonly hypothesisTemplate: string;
    readonly multiLabel: boolean;
    readonly text: string;
    getCandidates(): string[];
    getHypothesisTemplate(): string;
    getText(): string;
    isMultiLabel(): boolean;
}