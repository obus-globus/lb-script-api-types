import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JClass } from '../../../org/graalvm/jniutils/JNI$JClass.d.ts'
import type { JNI$JNIEnv } from '../../../org/graalvm/jniutils/JNI$JNIEnv.d.ts'
import type { JNI$JObject } from '../../../org/graalvm/jniutils/JNI$JObject.d.ts'
import type { CFunctionPointer } from '../../../org/graalvm/nativeimage/c/function/CFunctionPointer.d.ts'
import type { CCharPointer } from '../../../org/graalvm/nativeimage/c/type/CCharPointer.d.ts'
export interface JNI$DefineClass extends Object, CFunctionPointer{
    call(env: JNI$JNIEnv, name: CCharPointer, loader: JNI$JObject, buf: CCharPointer, bufLen: number): JNI$JClass;
}