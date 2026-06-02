import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JBooleanArray } from '../../../org/graalvm/jniutils/JNI$JBooleanArray.d.ts'
import type { JNI$JNIEnv } from '../../../org/graalvm/jniutils/JNI$JNIEnv.d.ts'
import type { CFunctionPointer } from '../../../org/graalvm/nativeimage/c/function/CFunctionPointer.d.ts'
import type { CCharPointer } from '../../../org/graalvm/nativeimage/c/type/CCharPointer.d.ts'
export interface JNI$GetBooleanArrayRegion extends Object, CFunctionPointer{
    call(env: JNI$JNIEnv, array: JNI$JBooleanArray, start: number, len: number, buf: CCharPointer): void;
}