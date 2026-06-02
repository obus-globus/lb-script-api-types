import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JNIEnv } from '../../../org/graalvm/jniutils/JNI$JNIEnv.d.ts'
import type { JNI$JWeak } from '../../../org/graalvm/jniutils/JNI$JWeak.d.ts'
import type { CFunctionPointer } from '../../../org/graalvm/nativeimage/c/function/CFunctionPointer.d.ts'
export interface JNI$DeleteWeakGlobalRef extends Object, CFunctionPointer{
    call(env: JNI$JNIEnv, wref: JNI$JWeak): void;
}