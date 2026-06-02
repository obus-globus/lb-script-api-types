import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JavaVM } from '../../../org/graalvm/jniutils/JNI$JavaVM.d.ts'
import type { CFunctionPointer } from '../../../org/graalvm/nativeimage/c/function/CFunctionPointer.d.ts'
export interface JNI$DetachCurrentThread extends Object, CFunctionPointer{
    call(vm: JNI$JavaVM): number;
}