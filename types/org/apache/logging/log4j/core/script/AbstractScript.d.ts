import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class AbstractScript extends Object {
    constructor(name: string, language: string, scriptText: string)
    readonly language: string;
    readonly name: string;
    readonly scriptText: string;
    getLanguage(): string;
    getName(): string;
    getScriptText(): string;
}