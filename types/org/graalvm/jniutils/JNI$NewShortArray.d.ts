import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JNIEnv } from '../../../org/graalvm/jniutils/JNI$JNIEnv.d.ts'
import type { JNI$JShortArray } from '../../../org/graalvm/jniutils/JNI$JShortArray.d.ts'
import type { CFunctionPointer } from '../../../org/graalvm/nativeimage/c/function/CFunctionPointer.d.ts'
export interface JNI$NewShortArray extends Object, CFunctionPointer{
    call(env: JNI$JNIEnv, len: number): JNI$JShortArray;
}