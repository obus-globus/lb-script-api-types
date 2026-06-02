import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JNIEnv } from '../../../org/graalvm/jniutils/JNI$JNIEnv.d.ts'
import type { JNI$JThrowable } from '../../../org/graalvm/jniutils/JNI$JThrowable.d.ts'
import type { CFunctionPointer } from '../../../org/graalvm/nativeimage/c/function/CFunctionPointer.d.ts'
export interface JNI$Throw extends Object, CFunctionPointer{
    call(env: JNI$JNIEnv, throwable: JNI$JThrowable): number;
    callNoTransition(env: JNI$JNIEnv, throwable: JNI$JThrowable): number;
}