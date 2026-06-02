import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JIntArray } from '../../../org/graalvm/jniutils/JNI$JIntArray.d.ts'
import type { JNI$JNIEnv } from '../../../org/graalvm/jniutils/JNI$JNIEnv.d.ts'
import type { CFunctionPointer } from '../../../org/graalvm/nativeimage/c/function/CFunctionPointer.d.ts'
import type { CIntPointer } from '../../../org/graalvm/nativeimage/c/type/CIntPointer.d.ts'
export interface JNI$ReleaseIntArrayElements extends Object, CFunctionPointer{
    call(env: JNI$JNIEnv, array: JNI$JIntArray, elems: CIntPointer, mode: number): void;
}