import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JNINativeInterface } from '../../../org/graalvm/jniutils/JNI$JNINativeInterface.d.ts'
import type { ComparableWord } from '../../../org/graalvm/word/ComparableWord.d.ts'
import type { PointerBase } from '../../../org/graalvm/word/PointerBase.d.ts'
export interface JNI$JNIEnv extends Object, PointerBase{
    equal(val: ComparableWord): boolean;
    getFunctions(): JNI$JNINativeInterface;
    isNonNull(): boolean;
    isNull(): boolean;
    notEqual(val: ComparableWord): boolean;
    rawValue(): number;
}