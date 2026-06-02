import type { UnexpectedCharacterException } from '../../../../../com/llamalad7/mixinextras/lib/semver/UnexpectedCharacterException.d.ts'
import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
export class ParseException extends RuntimeException {
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: UnexpectedCharacterException)
    toString(): string;
}