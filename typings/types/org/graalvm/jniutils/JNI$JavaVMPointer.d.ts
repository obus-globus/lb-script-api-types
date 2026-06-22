import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JavaVM } from '../../../org/graalvm/jniutils/JNI$JavaVM.d.ts'
import type { ComparableWord } from '../../../org/graalvm/word/ComparableWord.d.ts'
import type { PointerBase } from '../../../org/graalvm/word/PointerBase.d.ts'
export interface JNI$JavaVMPointer extends Object, PointerBase{
    equal(val: ComparableWord): boolean;
    isNonNull(): boolean;
    isNull(): boolean;
    notEqual(val: ComparableWord): boolean;
    rawValue(): number;
    readJavaVM(): JNI$JavaVM;
    writeJavaVM(javaVM: JNI$JavaVM): void;
}