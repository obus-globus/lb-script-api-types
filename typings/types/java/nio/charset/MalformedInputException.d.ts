import type { CharacterCodingException } from '../../../java/nio/charset/CharacterCodingException.d.ts'
export class MalformedInputException extends CharacterCodingException {
    constructor(arg0: number)
    readonly inputLength: number;
    readonly message: string | null;
    getInputLength(): number;
}