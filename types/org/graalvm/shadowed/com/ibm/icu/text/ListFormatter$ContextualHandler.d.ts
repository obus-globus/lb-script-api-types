import type { Pattern } from '../../../../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ListFormatter$PatternHandler } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/ListFormatter$PatternHandler.d.ts'
export class ListFormatter$ContextualHandler extends Object implements ListFormatter$PatternHandler {
    constructor(regexp: Pattern, thenTwo: string, elseTwo: string, thenEnd: string, elseEnd: string)
    // private elseEndPattern: string;
    // private elseTwoPattern: string;
    // private regexp: Pattern;
    // private thenEndPattern: string;
    // private thenTwoPattern: string;
    getEndPattern(text: string): string;
    getTwoPattern(text: string): string;
}