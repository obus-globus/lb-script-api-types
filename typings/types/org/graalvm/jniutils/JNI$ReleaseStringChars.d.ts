import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JNIEnv } from '../../../org/graalvm/jniutils/JNI$JNIEnv.d.ts'
import type { JNI$JString } from '../../../org/graalvm/jniutils/JNI$JString.d.ts'
import type { CFunctionPointer } from '../../../org/graalvm/nativeimage/c/function/CFunctionPointer.d.ts'
import type { CShortPointer } from '../../../org/graalvm/nativeimage/c/type/CShortPointer.d.ts'
import type { ComparableWord } from '../../../org/graalvm/word/ComparableWord.d.ts'
export interface JNI$ReleaseStringChars extends Object, CFunctionPointer{
    call(env: JNI$JNIEnv, string: JNI$JString, chars: CShortPointer): void;
    equal(val: ComparableWord): boolean;
    isNonNull(): boolean;
    isNull(): boolean;
    notEqual(val: ComparableWord): boolean;
    rawValue(): number;
}