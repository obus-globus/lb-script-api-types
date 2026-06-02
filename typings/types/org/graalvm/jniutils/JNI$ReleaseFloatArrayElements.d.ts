import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JFloatArray } from '../../../org/graalvm/jniutils/JNI$JFloatArray.d.ts'
import type { JNI$JNIEnv } from '../../../org/graalvm/jniutils/JNI$JNIEnv.d.ts'
import type { CFunctionPointer } from '../../../org/graalvm/nativeimage/c/function/CFunctionPointer.d.ts'
import type { CFloatPointer } from '../../../org/graalvm/nativeimage/c/type/CFloatPointer.d.ts'
export interface JNI$ReleaseFloatArrayElements extends Object, CFunctionPointer{
    call(env: JNI$JNIEnv, array: JNI$JFloatArray, elems: CFloatPointer, mode: number): void;
}