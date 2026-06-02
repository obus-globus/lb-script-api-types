import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JClass } from '../../../org/graalvm/jniutils/JNI$JClass.d.ts'
import type { JNI$JFieldID } from '../../../org/graalvm/jniutils/JNI$JFieldID.d.ts'
import type { JNI$JNIEnv } from '../../../org/graalvm/jniutils/JNI$JNIEnv.d.ts'
import type { CFunctionPointer } from '../../../org/graalvm/nativeimage/c/function/CFunctionPointer.d.ts'
import type { CCharPointer } from '../../../org/graalvm/nativeimage/c/type/CCharPointer.d.ts'
export interface JNI$GetStaticFieldID extends Object, CFunctionPointer{
    call(env: JNI$JNIEnv, clazz: JNI$JClass, name: CCharPointer, sig: CCharPointer): JNI$JFieldID;
}