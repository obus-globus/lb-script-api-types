import type { CommonMatcher } from '../../../../com/google/common/base/CommonMatcher.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export abstract class CommonPattern extends Object {
    static compile(parampattern: string): CommonPattern;
    static isPcreLike(): boolean;
    constructor()
    flags(): number;
    matcher(t: CharSequence): CommonMatcher;
    pattern(): string;
    toString(): string;
}