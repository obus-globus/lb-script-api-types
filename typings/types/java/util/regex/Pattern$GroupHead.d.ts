import type { Matcher } from '../../../java/util/regex/Matcher.d.ts'
import type { Pattern$GroupTail } from '../../../java/util/regex/Pattern$GroupTail.d.ts'
import type { Pattern$Node } from '../../../java/util/regex/Pattern$Node.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class Pattern$GroupHead extends Pattern$Node {
    constructor(arg0: number)
    // private localIndex: number;
    // private tail: Pattern$GroupTail;
    match(arg0: Matcher, arg1: number, arg2: CharSequence): boolean;
}