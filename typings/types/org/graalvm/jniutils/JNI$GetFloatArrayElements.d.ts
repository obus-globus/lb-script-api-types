import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JFloatArray } from '../../../org/graalvm/jniutils/JNI$JFloatArray.d.ts'
import type { JNI$JNIEnv } from '../../../org/graalvm/jniutils/JNI$JNIEnv.d.ts'
import type { JNI$JValue } from '../../../org/graalvm/jniutils/JNI$JValue.d.ts'
import type { CFunctionPointer } from '../../../org/graalvm/nativeimage/c/function/CFunctionPointer.d.ts'
import type { CFloatPointer } from '../../../org/graalvm/nativeimage/c/type/CFloatPointer.d.ts'
import type { ComparableWord } from '../../../org/graalvm/word/ComparableWord.d.ts'
export interface JNI$GetFloatArrayElements extends Object, CFunctionPointer{
    call(env: JNI$JNIEnv, array: JNI$JFloatArray, isCopy: JNI$JValue): CFloatPointer;
    equal(val: ComparableWord): boolean;
    isNonNull(): boolean;
    isNull(): boolean;
    notEqual(val: ComparableWord): boolean;
    rawValue(): number;
}