import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JArray } from '../../../org/graalvm/jniutils/JNI$JArray.d.ts'
import type { JNI$JNIEnv } from '../../../org/graalvm/jniutils/JNI$JNIEnv.d.ts'
import type { CFunctionPointer } from '../../../org/graalvm/nativeimage/c/function/CFunctionPointer.d.ts'
export interface JNI$GetArrayLength extends Object, CFunctionPointer{
    call(env: JNI$JNIEnv, array: JNI$JArray): number;
}