import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JNIEnvPointer } from '../../../org/graalvm/jniutils/JNI$JNIEnvPointer.d.ts'
import type { JNI$JavaVM } from '../../../org/graalvm/jniutils/JNI$JavaVM.d.ts'
import type { CFunctionPointer } from '../../../org/graalvm/nativeimage/c/function/CFunctionPointer.d.ts'
import type { ComparableWord } from '../../../org/graalvm/word/ComparableWord.d.ts'
export interface JNI$GetEnv extends Object, CFunctionPointer{
    call(vm: JNI$JavaVM, envOut: JNI$JNIEnvPointer, version: number): number;
    equal(val: ComparableWord): boolean;
    isNonNull(): boolean;
    isNull(): boolean;
    notEqual(val: ComparableWord): boolean;
    rawValue(): number;
}