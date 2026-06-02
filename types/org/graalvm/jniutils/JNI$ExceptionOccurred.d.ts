import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JNIEnv } from '../../../org/graalvm/jniutils/JNI$JNIEnv.d.ts'
import type { JNI$JThrowable } from '../../../org/graalvm/jniutils/JNI$JThrowable.d.ts'
import type { CFunctionPointer } from '../../../org/graalvm/nativeimage/c/function/CFunctionPointer.d.ts'
export interface JNI$ExceptionOccurred extends Object, CFunctionPointer{
    call(env: JNI$JNIEnv): JNI$JThrowable;
}