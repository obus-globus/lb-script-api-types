import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JNIInvokeInterface } from '../../../org/graalvm/jniutils/JNI$JNIInvokeInterface.d.ts'
import type { PointerBase } from '../../../org/graalvm/word/PointerBase.d.ts'
export interface JNI$JavaVM extends Object, PointerBase{
    getFunctions(): JNI$JNIInvokeInterface;
}