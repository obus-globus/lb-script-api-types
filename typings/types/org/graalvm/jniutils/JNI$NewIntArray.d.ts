import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JIntArray } from '../../../org/graalvm/jniutils/JNI$JIntArray.d.ts'
import type { JNI$JNIEnv } from '../../../org/graalvm/jniutils/JNI$JNIEnv.d.ts'
import type { CFunctionPointer } from '../../../org/graalvm/nativeimage/c/function/CFunctionPointer.d.ts'
export interface JNI$NewIntArray extends Object, CFunctionPointer{
    call(env: JNI$JNIEnv, len: number): JNI$JIntArray;
}