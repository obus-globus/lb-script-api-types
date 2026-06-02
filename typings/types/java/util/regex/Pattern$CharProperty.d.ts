import type { Matcher } from '../../../java/util/regex/Matcher.d.ts'
import type { Pattern$CharPredicate } from '../../../java/util/regex/Pattern$CharPredicate.d.ts'
import type { Pattern$Node } from '../../../java/util/regex/Pattern$Node.d.ts'
import type { Pattern$TreeInfo } from '../../../java/util/regex/Pattern$TreeInfo.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class Pattern$CharProperty extends Pattern$Node {
    constructor(arg0: (param0: number) => kotlin.Boolean)
    // private predicate: (param0: number) => kotlin.Boolean;
    match(arg0: Matcher, arg1: number, arg2: CharSequence): boolean;
    study(arg0: Pattern$TreeInfo): boolean;
}