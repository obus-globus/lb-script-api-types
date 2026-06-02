import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JClass } from '../../../org/graalvm/jniutils/JNI$JClass.d.ts'
import type { JNI$JNIEnv } from '../../../org/graalvm/jniutils/JNI$JNIEnv.d.ts'
import type { JNI$JObject } from '../../../org/graalvm/jniutils/JNI$JObject.d.ts'
import type { JNI$JValue } from '../../../org/graalvm/jniutils/JNI$JValue.d.ts'
import type { JNICalls$JNIMethod } from '../../../org/graalvm/jniutils/JNICalls$JNIMethod.d.ts'
import type { JNIExceptionWrapper$ExceptionHandler } from '../../../org/graalvm/jniutils/JNIExceptionWrapper$ExceptionHandler.d.ts'
export class JNICalls extends Object {
    static createWithExceptionHandler(paramhandler: JNIExceptionWrapper$ExceptionHandler): JNICalls;
    static getDefault(): JNICalls;
    private constructor(exceptionHandler: JNIExceptionWrapper$ExceptionHandler)
    // private exceptionHandler: JNIExceptionWrapper$ExceptionHandler;
    callBoolean(env: JNI$JNIEnv, object: JNI$JObject, method: JNICalls$JNIMethod, args: JNI$JValue): boolean;
    callByte(env: JNI$JNIEnv, object: JNI$JObject, method: JNICalls$JNIMethod, args: JNI$JValue): number;
    callChar(env: JNI$JNIEnv, object: JNI$JObject, method: JNICalls$JNIMethod, args: JNI$JValue): string;
    callDouble(env: JNI$JNIEnv, object: JNI$JObject, method: JNICalls$JNIMethod, args: JNI$JValue): number;
    callFloat(env: JNI$JNIEnv, object: JNI$JObject, method: JNICalls$JNIMethod, args: JNI$JValue): number;
    callInt(env: JNI$JNIEnv, object: JNI$JObject, method: JNICalls$JNIMethod, args: JNI$JValue): number;
    callJObject<R extends JNI$JObject>(env: JNI$JNIEnv, object: JNI$JObject, method: JNICalls$JNIMethod, args: JNI$JValue): R;
    callLong(env: JNI$JNIEnv, object: JNI$JObject, method: JNICalls$JNIMethod, args: JNI$JValue): number;
    callNewObject<R extends JNI$JObject>(env: JNI$JNIEnv, clazz: JNI$JClass, constructor: JNICalls$JNIMethod, args: JNI$JValue): R;
    callShort(env: JNI$JNIEnv, object: JNI$JObject, method: JNICalls$JNIMethod, args: JNI$JValue): number;
    callStaticBoolean(env: JNI$JNIEnv, clazz: JNI$JClass, method: JNICalls$JNIMethod, args: JNI$JValue): boolean;
    callStaticInt(env: JNI$JNIEnv, clazz: JNI$JClass, method: JNICalls$JNIMethod, args: JNI$JValue): number;
    callStaticJObject<R extends JNI$JObject>(env: JNI$JNIEnv, clazz: JNI$JClass, method: JNICalls$JNIMethod, args: JNI$JValue): R;
    callStaticLong(env: JNI$JNIEnv, clazz: JNI$JClass, method: JNICalls$JNIMethod, args: JNI$JValue): number;
    callStaticVoid(env: JNI$JNIEnv, clazz: JNI$JClass, method: JNICalls$JNIMethod, args: JNI$JValue): void;
    callVoid(env: JNI$JNIEnv, object: JNI$JObject, method: JNICalls$JNIMethod, args: JNI$JValue): void;
}