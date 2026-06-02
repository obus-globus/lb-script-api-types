import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JNIEnv } from '../../../org/graalvm/jniutils/JNI$JNIEnv.d.ts'
import type { PointerBase } from '../../../org/graalvm/word/PointerBase.d.ts'
export interface JNI$JNIEnvPointer extends Object, PointerBase{
    readJNIEnv(): JNI$JNIEnv;
    writeJNIEnv(env: JNI$JNIEnv): void;
}