import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JIntArray } from '../../../org/graalvm/jniutils/JNI$JIntArray.d.ts'
import type { JNI$JNIEnv } from '../../../org/graalvm/jniutils/JNI$JNIEnv.d.ts'
import type { JNI$JValue } from '../../../org/graalvm/jniutils/JNI$JValue.d.ts'
import type { CFunctionPointer } from '../../../org/graalvm/nativeimage/c/function/CFunctionPointer.d.ts'
import type { CIntPointer } from '../../../org/graalvm/nativeimage/c/type/CIntPointer.d.ts'
export interface JNI$GetIntArrayElements extends Object, CFunctionPointer{
    call(env: JNI$JNIEnv, array: JNI$JIntArray, isCopy: JNI$JValue): CIntPointer;
}