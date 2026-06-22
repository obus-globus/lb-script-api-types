import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JCharArray } from '../../../org/graalvm/jniutils/JNI$JCharArray.d.ts'
import type { JNI$JNIEnv } from '../../../org/graalvm/jniutils/JNI$JNIEnv.d.ts'
import type { CFunctionPointer } from '../../../org/graalvm/nativeimage/c/function/CFunctionPointer.d.ts'
import type { CShortPointer } from '../../../org/graalvm/nativeimage/c/type/CShortPointer.d.ts'
import type { ComparableWord } from '../../../org/graalvm/word/ComparableWord.d.ts'
export interface JNI$ReleaseCharArrayElements extends Object, CFunctionPointer{
    call(env: JNI$JNIEnv, array: JNI$JCharArray, elems: CShortPointer, mode: number): void;
    equal(val: ComparableWord): boolean;
    isNonNull(): boolean;
    isNull(): boolean;
    notEqual(val: ComparableWord): boolean;
    rawValue(): number;
}