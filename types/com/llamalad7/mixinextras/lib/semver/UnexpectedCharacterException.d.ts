import type { ParseException } from '../../../../../com/llamalad7/mixinextras/lib/semver/ParseException.d.ts'
import type { VersionParser$CharType } from '../../../../../com/llamalad7/mixinextras/lib/semver/VersionParser$CharType.d.ts'
import type { UnexpectedElementException } from '../../../../../com/llamalad7/mixinextras/lib/semver/util/UnexpectedElementException.d.ts'
export class UnexpectedCharacterException extends ParseException {
    constructor(arg0: UnexpectedElementException)
    constructor(arg0: string, arg1: number, arg2: VersionParser$CharType[])
    // private expected: VersionParser$CharType[];
    // private position: number;
    // private unexpected: string;
    toString(): string;
}