import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ListFormatter$PatternHandler } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/ListFormatter$PatternHandler.d.ts'
export class ListFormatter$StaticHandler extends Object implements ListFormatter$PatternHandler {
    constructor(two: string, end: string)
    // private endPattern: string;
    // private twoPattern: string;
    getEndPattern(text: string): string;
    getTwoPattern(text: string): string;
}