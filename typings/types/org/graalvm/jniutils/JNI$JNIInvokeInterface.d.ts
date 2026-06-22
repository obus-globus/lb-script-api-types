import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$AttachCurrentThread } from '../../../org/graalvm/jniutils/JNI$AttachCurrentThread.d.ts'
import type { JNI$AttachCurrentThreadAsDaemon } from '../../../org/graalvm/jniutils/JNI$AttachCurrentThreadAsDaemon.d.ts'
import type { JNI$DetachCurrentThread } from '../../../org/graalvm/jniutils/JNI$DetachCurrentThread.d.ts'
import type { JNI$GetEnv } from '../../../org/graalvm/jniutils/JNI$GetEnv.d.ts'
import type { ComparableWord } from '../../../org/graalvm/word/ComparableWord.d.ts'
import type { PointerBase } from '../../../org/graalvm/word/PointerBase.d.ts'
export interface JNI$JNIInvokeInterface extends Object, PointerBase{
    equal(val: ComparableWord): boolean;
    getAttachCurrentThread(): JNI$AttachCurrentThread;
    getAttachCurrentThreadAsDaemon(): JNI$AttachCurrentThreadAsDaemon;
    getDetachCurrentThread(): JNI$DetachCurrentThread;
    getGetEnv(): JNI$GetEnv;
    isNonNull(): boolean;
    isNull(): boolean;
    notEqual(val: ComparableWord): boolean;
    rawValue(): number;
}