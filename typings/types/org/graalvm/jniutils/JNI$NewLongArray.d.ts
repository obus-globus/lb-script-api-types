import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JLongArray } from '../../../org/graalvm/jniutils/JNI$JLongArray.d.ts'
import type { JNI$JNIEnv } from '../../../org/graalvm/jniutils/JNI$JNIEnv.d.ts'
import type { CFunctionPointer } from '../../../org/graalvm/nativeimage/c/function/CFunctionPointer.d.ts'
import type { ComparableWord } from '../../../org/graalvm/word/ComparableWord.d.ts'
export interface JNI$NewLongArray extends Object, CFunctionPointer{
    call(env: JNI$JNIEnv, len: number): JNI$JLongArray;
    equal(val: ComparableWord): boolean;
    isNonNull(): boolean;
    isNull(): boolean;
    notEqual(val: ComparableWord): boolean;
    rawValue(): number;
}