import type { Matcher } from '../../../java/util/regex/Matcher.d.ts'
import type { Pattern$Node } from '../../../java/util/regex/Pattern$Node.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class Pattern$GroupTail extends Pattern$Node {
    constructor(arg0: number, arg1: number)
    // private groupIndex: number;
    // private localIndex: number;
    match(arg0: Matcher, arg1: number, arg2: CharSequence): boolean;
}