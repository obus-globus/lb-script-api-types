import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JClass } from '../../../org/graalvm/jniutils/JNI$JClass.d.ts'
import type { JNI$JMethodID } from '../../../org/graalvm/jniutils/JNI$JMethodID.d.ts'
import type { JNI$JNIEnv } from '../../../org/graalvm/jniutils/JNI$JNIEnv.d.ts'
import type { JNICalls$JNIMethod } from '../../../org/graalvm/jniutils/JNICalls$JNIMethod.d.ts'
export class JNIExceptionWrapper$JNIMethodResolver extends Object implements JNICalls$JNIMethod {
    static findMethod(paramenv: JNI$JNIEnv, paramclazz: JNI$JClass, paramstaticMethod: boolean, paramrequired: boolean, parammethodName: string, parammethodSignature: string): JNICalls$JNIMethod;
    static findMethod(paramenv: JNI$JNIEnv, paramclazz: JNI$JClass, paramstaticMethod: boolean, parammethodName: string, parammethodSignature: string): JNICalls$JNIMethod;
    private constructor(methodName: string, methodSignature: string)
    // private methodId: JNI$JMethodID;
    // private methodName: string;
    // private methodSignature: string;
    getDisplayName(): string;
    getJMethodID(): JNI$JMethodID;
    resolve(jniEnv: JNI$JNIEnv): JNIExceptionWrapper$JNIMethodResolver;
}