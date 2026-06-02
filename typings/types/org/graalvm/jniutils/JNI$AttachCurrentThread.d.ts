import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JNIEnvPointer } from '../../../org/graalvm/jniutils/JNI$JNIEnvPointer.d.ts'
import type { JNI$JavaVM } from '../../../org/graalvm/jniutils/JNI$JavaVM.d.ts'
import type { JNI$JavaVMAttachArgs } from '../../../org/graalvm/jniutils/JNI$JavaVMAttachArgs.d.ts'
import type { CFunctionPointer } from '../../../org/graalvm/nativeimage/c/function/CFunctionPointer.d.ts'
export interface JNI$AttachCurrentThread extends Object, CFunctionPointer{
    call(vm: JNI$JavaVM, envOut: JNI$JNIEnvPointer, args: JNI$JavaVMAttachArgs): number;
}