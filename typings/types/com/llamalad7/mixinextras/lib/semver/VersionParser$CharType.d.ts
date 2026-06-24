import type { VersionParser$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Stream$ElementType } from '../../../../../com/llamalad7/mixinextras/lib/semver/util/Stream$ElementType.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class VersionParser$CharType extends Enum<VersionParser$CharType> implements Stream$ElementType<string> {
    static DIGIT: VersionParser$CharType;
    static DOT: VersionParser$CharType;
    static EOI: VersionParser$CharType;
    static HYPHEN: VersionParser$CharType;
    static ILLEGAL: VersionParser$CharType;
    static LETTER: VersionParser$CharType;
    static PLUS: VersionParser$CharType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static values(): (Object | null)[];
    private constructor()
    constructor(arg2: VersionParser$1)
    name(): "DIGIT" | "LETTER" | "DOT" | "HYPHEN" | "PLUS" | "EOI" | "ILLEGAL";
}