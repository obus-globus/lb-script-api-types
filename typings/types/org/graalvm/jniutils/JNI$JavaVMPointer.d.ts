import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JavaVM } from '../../../org/graalvm/jniutils/JNI$JavaVM.d.ts'
import type { PointerBase } from '../../../org/graalvm/word/PointerBase.d.ts'
export interface JNI$JavaVMPointer extends Object, PointerBase{
    readJavaVM(): JNI$JavaVM;
    writeJavaVM(javaVM: JNI$JavaVM): void;
}