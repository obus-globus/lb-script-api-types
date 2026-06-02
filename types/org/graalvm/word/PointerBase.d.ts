import type { Object } from '../../../java/lang/Object.d.ts'
import type { ComparableWord } from '../../../org/graalvm/word/ComparableWord.d.ts'
export interface PointerBase extends Object, ComparableWord{
    isNonNull(): boolean;
    isNull(): boolean;
}