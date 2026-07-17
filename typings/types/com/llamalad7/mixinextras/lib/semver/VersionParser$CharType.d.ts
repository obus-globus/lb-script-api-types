import type { Stream$ElementType } from '../../../../../com/llamalad7/mixinextras/lib/semver/util/Stream$ElementType.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class VersionParser$CharType extends Enum<VersionParser$CharType> implements Stream$ElementType<string> {
    static DIGIT: VersionParser$CharType;
    static DOT: VersionParser$CharType;
    static EOI: VersionParser$CharType;
    static HYPHEN: VersionParser$CharType;
    static ILLEGAL: VersionParser$CharType;
    static LETTER: VersionParser$CharType;
    static PLUS: VersionParser$CharType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static values(): VersionParser$CharType[];
    private constructor()
    name(): "DIGIT" | "LETTER" | "DOT" | "HYPHEN" | "PLUS" | "EOI" | "ILLEGAL";
}