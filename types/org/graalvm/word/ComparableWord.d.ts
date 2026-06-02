import type { Object } from '../../../java/lang/Object.d.ts'
import type { WordBase } from '../../../org/graalvm/word/WordBase.d.ts'
export interface ComparableWord extends Object, WordBase{
    equal(val: ComparableWord): boolean;
    notEqual(val: ComparableWord): boolean;
}