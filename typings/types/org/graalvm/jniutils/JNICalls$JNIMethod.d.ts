import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JMethodID } from '../../../org/graalvm/jniutils/JNI$JMethodID.d.ts'
export interface JNICalls$JNIMethod extends Object{
    getDisplayName(): string;
    getJMethodID(): JNI$JMethodID;
}