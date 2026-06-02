import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JMethodID } from '../../../org/graalvm/jniutils/JNI$JMethodID.d.ts'
import type { JNI$JNIEnv } from '../../../org/graalvm/jniutils/JNI$JNIEnv.d.ts'
import type { JNI$JObject } from '../../../org/graalvm/jniutils/JNI$JObject.d.ts'
import type { JNI$JValue } from '../../../org/graalvm/jniutils/JNI$JValue.d.ts'
import type { CFunctionPointer } from '../../../org/graalvm/nativeimage/c/function/CFunctionPointer.d.ts'
export interface JNI$CallObjectMethodA extends Object, CFunctionPointer{
    call(env: JNI$JNIEnv, object: JNI$JObject, methodID: JNI$JMethodID, args: JNI$JValue): JNI$JObject;
}