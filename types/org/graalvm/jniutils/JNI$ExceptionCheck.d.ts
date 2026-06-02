import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JNIEnv } from '../../../org/graalvm/jniutils/JNI$JNIEnv.d.ts'
import type { CFunctionPointer } from '../../../org/graalvm/nativeimage/c/function/CFunctionPointer.d.ts'
export interface JNI$ExceptionCheck extends Object, CFunctionPointer{
    call(env: JNI$JNIEnv): boolean;
    callNoTransition(env: JNI$JNIEnv): boolean;
}