import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JByteArray } from '../../../org/graalvm/jniutils/JNI$JByteArray.d.ts'
import type { JNI$JNIEnv } from '../../../org/graalvm/jniutils/JNI$JNIEnv.d.ts'
import type { JNI$JValue } from '../../../org/graalvm/jniutils/JNI$JValue.d.ts'
import type { CFunctionPointer } from '../../../org/graalvm/nativeimage/c/function/CFunctionPointer.d.ts'
import type { CCharPointer } from '../../../org/graalvm/nativeimage/c/type/CCharPointer.d.ts'
export interface JNI$GetByteArrayElements extends Object, CFunctionPointer{
    call(env: JNI$JNIEnv, array: JNI$JByteArray, isCopy: JNI$JValue): CCharPointer;
}