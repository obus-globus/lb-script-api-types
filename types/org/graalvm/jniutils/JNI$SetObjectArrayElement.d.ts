import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JNIEnv } from '../../../org/graalvm/jniutils/JNI$JNIEnv.d.ts'
import type { JNI$JObject } from '../../../org/graalvm/jniutils/JNI$JObject.d.ts'
import type { JNI$JObjectArray } from '../../../org/graalvm/jniutils/JNI$JObjectArray.d.ts'
import type { CFunctionPointer } from '../../../org/graalvm/nativeimage/c/function/CFunctionPointer.d.ts'
export interface JNI$SetObjectArrayElement extends Object, CFunctionPointer{
    call(env: JNI$JNIEnv, array: JNI$JObjectArray, index: number, val: JNI$JObject): void;
}