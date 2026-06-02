import type { ListFormatter$PatternHandler } from '../../../../com/ibm/icu/text/ListFormatter$PatternHandler.d.ts'
import type { Pattern } from '../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ListFormatter$ContextualHandler extends Object implements ListFormatter$PatternHandler {
    constructor(arg0: Pattern, arg1: string, arg2: string, arg3: string, arg4: string)
    // private elseEndPattern: string;
    // private elseTwoPattern: string;
    // private regexp: Pattern;
    // private thenEndPattern: string;
    // private thenTwoPattern: string;
    getEndPattern(arg0: string): string;
    getTwoPattern(arg0: string): string;
}