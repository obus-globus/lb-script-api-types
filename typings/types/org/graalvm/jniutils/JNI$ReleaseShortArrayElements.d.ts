import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JNIEnv } from '../../../org/graalvm/jniutils/JNI$JNIEnv.d.ts'
import type { JNI$JShortArray } from '../../../org/graalvm/jniutils/JNI$JShortArray.d.ts'
import type { CFunctionPointer } from '../../../org/graalvm/nativeimage/c/function/CFunctionPointer.d.ts'
import type { CShortPointer } from '../../../org/graalvm/nativeimage/c/type/CShortPointer.d.ts'
export interface JNI$ReleaseShortArrayElements extends Object, CFunctionPointer{
    call(env: JNI$JNIEnv, array: JNI$JShortArray, elems: CShortPointer, mode: number): void;
}