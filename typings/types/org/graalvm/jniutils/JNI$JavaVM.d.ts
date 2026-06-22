import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JNIInvokeInterface } from '../../../org/graalvm/jniutils/JNI$JNIInvokeInterface.d.ts'
import type { ComparableWord } from '../../../org/graalvm/word/ComparableWord.d.ts'
import type { PointerBase } from '../../../org/graalvm/word/PointerBase.d.ts'
export interface JNI$JavaVM extends Object, PointerBase{
    equal(val: ComparableWord): boolean;
    getFunctions(): JNI$JNIInvokeInterface;
    isNonNull(): boolean;
    isNull(): boolean;
    notEqual(val: ComparableWord): boolean;
    rawValue(): number;
}