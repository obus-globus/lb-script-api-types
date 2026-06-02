import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JNIEnv } from '../../../org/graalvm/jniutils/JNI$JNIEnv.d.ts'
import type { JNI$JObject } from '../../../org/graalvm/jniutils/JNI$JObject.d.ts'
import type { CFunctionPointer } from '../../../org/graalvm/nativeimage/c/function/CFunctionPointer.d.ts'
import type { VoidPointer } from '../../../org/graalvm/nativeimage/c/type/VoidPointer.d.ts'
export interface JNI$GetDirectBufferAddress extends Object, CFunctionPointer{
    call(env: JNI$JNIEnv, buf: JNI$JObject): VoidPointer;
}