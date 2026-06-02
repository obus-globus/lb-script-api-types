import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JLongArray } from '../../../org/graalvm/jniutils/JNI$JLongArray.d.ts'
import type { JNI$JNIEnv } from '../../../org/graalvm/jniutils/JNI$JNIEnv.d.ts'
import type { CFunctionPointer } from '../../../org/graalvm/nativeimage/c/function/CFunctionPointer.d.ts'
import type { CLongPointer } from '../../../org/graalvm/nativeimage/c/type/CLongPointer.d.ts'
export interface JNI$ReleaseLongArrayElements extends Object, CFunctionPointer{
    call(env: JNI$JNIEnv, array: JNI$JLongArray, elems: CLongPointer, mode: number): void;
}