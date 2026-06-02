import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JBooleanArray } from '../../../org/graalvm/jniutils/JNI$JBooleanArray.d.ts'
import type { JNI$JNIEnv } from '../../../org/graalvm/jniutils/JNI$JNIEnv.d.ts'
import type { CFunctionPointer } from '../../../org/graalvm/nativeimage/c/function/CFunctionPointer.d.ts'
export interface JNI$NewBooleanArray extends Object, CFunctionPointer{
    call(env: JNI$JNIEnv, len: number): JNI$JBooleanArray;
}