import type { Matcher } from '../../../java/util/regex/Matcher.d.ts'
import type { Pattern$TreeInfo } from '../../../java/util/regex/Pattern$TreeInfo.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class Pattern$Node extends Object {
    constructor()
    // private next: Pattern$Node;
    match(arg0: Matcher, arg1: number, arg2: CharSequence): boolean;
    study(arg0: Pattern$TreeInfo): boolean;
}