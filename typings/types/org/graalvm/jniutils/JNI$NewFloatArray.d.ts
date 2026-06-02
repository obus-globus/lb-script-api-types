import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JFloatArray } from '../../../org/graalvm/jniutils/JNI$JFloatArray.d.ts'
import type { JNI$JNIEnv } from '../../../org/graalvm/jniutils/JNI$JNIEnv.d.ts'
import type { CFunctionPointer } from '../../../org/graalvm/nativeimage/c/function/CFunctionPointer.d.ts'
export interface JNI$NewFloatArray extends Object, CFunctionPointer{
    call(env: JNI$JNIEnv, len: number): JNI$JFloatArray;
}