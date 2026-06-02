import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JNIEnv } from '../../../org/graalvm/jniutils/JNI$JNIEnv.d.ts'
import type { JNI$JavaVMPointer } from '../../../org/graalvm/jniutils/JNI$JavaVMPointer.d.ts'
import type { CFunctionPointer } from '../../../org/graalvm/nativeimage/c/function/CFunctionPointer.d.ts'
export interface JNI$GetJavaVM extends Object, CFunctionPointer{
    call(env: JNI$JNIEnv, javaVMOut: JNI$JavaVMPointer): number;
}