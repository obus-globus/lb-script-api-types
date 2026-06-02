import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JNIEnv } from '../../../org/graalvm/jniutils/JNI$JNIEnv.d.ts'
import type { JNI$JObject } from '../../../org/graalvm/jniutils/JNI$JObject.d.ts'
import type { CFunctionPointer } from '../../../org/graalvm/nativeimage/c/function/CFunctionPointer.d.ts'
export interface JNI$PopLocalFrame extends Object, CFunctionPointer{
    call(env: JNI$JNIEnv, result: JNI$JObject): JNI$JObject;
}