import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JDoubleArray } from '../../../org/graalvm/jniutils/JNI$JDoubleArray.d.ts'
import type { JNI$JNIEnv } from '../../../org/graalvm/jniutils/JNI$JNIEnv.d.ts'
import type { CFunctionPointer } from '../../../org/graalvm/nativeimage/c/function/CFunctionPointer.d.ts'
import type { CDoublePointer } from '../../../org/graalvm/nativeimage/c/type/CDoublePointer.d.ts'
export interface JNI$GetDoubleArrayRegion extends Object, CFunctionPointer{
    call(env: JNI$JNIEnv, array: JNI$JDoubleArray, start: number, len: number, buf: CDoublePointer): void;
}