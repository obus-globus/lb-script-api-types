import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JNINativeInterface } from '../../../org/graalvm/jniutils/JNI$JNINativeInterface.d.ts'
import type { PointerBase } from '../../../org/graalvm/word/PointerBase.d.ts'
export interface JNI$JNIEnv extends Object, PointerBase{
    getFunctions(): JNI$JNINativeInterface;
}