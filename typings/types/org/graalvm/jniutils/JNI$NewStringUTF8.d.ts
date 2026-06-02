import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JNIEnv } from '../../../org/graalvm/jniutils/JNI$JNIEnv.d.ts'
import type { JNI$JString } from '../../../org/graalvm/jniutils/JNI$JString.d.ts'
import type { CFunctionPointer } from '../../../org/graalvm/nativeimage/c/function/CFunctionPointer.d.ts'
import type { CCharPointer } from '../../../org/graalvm/nativeimage/c/type/CCharPointer.d.ts'
export interface JNI$NewStringUTF8 extends Object, CFunctionPointer{
    call(env: JNI$JNIEnv, bytes: CCharPointer): JNI$JString;
    callNoTransition(env: JNI$JNIEnv, bytes: CCharPointer): JNI$JString;
}