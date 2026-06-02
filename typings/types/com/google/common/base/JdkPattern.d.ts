import type { CommonMatcher } from '../../../../com/google/common/base/CommonMatcher.d.ts'
import type { CommonPattern } from '../../../../com/google/common/base/CommonPattern.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Pattern } from '../../../../java/util/regex/Pattern.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class JdkPattern extends CommonPattern implements Serializable {
    static compile(parampattern: string): CommonPattern;
    static isPcreLike(): boolean;
    constructor(pattern: Pattern)
    // private pattern: Pattern;
    flags(): number;
    matcher(t: CharSequence): CommonMatcher;
    pattern(): string;
    toString(): string;
}