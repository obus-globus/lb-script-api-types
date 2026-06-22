import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JArray } from '../../../org/graalvm/jniutils/JNI$JArray.d.ts'
import type { ComparableWord } from '../../../org/graalvm/word/ComparableWord.d.ts'
export interface JNI$JIntArray extends Object, JNI$JArray{
    equal(val: ComparableWord): boolean;
    isNonNull(): boolean;
    isNull(): boolean;
    notEqual(val: ComparableWord): boolean;
    rawValue(): number;
}