import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ComparableWord } from '../../../../../org/graalvm/word/ComparableWord.d.ts'
export interface RelocatedPointer extends Object, ComparableWord{
    equal(val: ComparableWord): boolean;
    notEqual(val: ComparableWord): boolean;
    rawValue(): number;
}