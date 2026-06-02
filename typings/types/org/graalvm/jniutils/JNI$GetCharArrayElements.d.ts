import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JCharArray } from '../../../org/graalvm/jniutils/JNI$JCharArray.d.ts'
import type { JNI$JNIEnv } from '../../../org/graalvm/jniutils/JNI$JNIEnv.d.ts'
import type { JNI$JValue } from '../../../org/graalvm/jniutils/JNI$JValue.d.ts'
import type { CFunctionPointer } from '../../../org/graalvm/nativeimage/c/function/CFunctionPointer.d.ts'
import type { CShortPointer } from '../../../org/graalvm/nativeimage/c/type/CShortPointer.d.ts'
export interface JNI$GetCharArrayElements extends Object, CFunctionPointer{
    call(env: JNI$JNIEnv, array: JNI$JCharArray, isCopy: JNI$JValue): CShortPointer;
}