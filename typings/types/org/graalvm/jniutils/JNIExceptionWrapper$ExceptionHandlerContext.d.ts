import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNI$JNIEnv } from '../../../org/graalvm/jniutils/JNI$JNIEnv.d.ts'
import type { JNI$JThrowable } from '../../../org/graalvm/jniutils/JNI$JThrowable.d.ts'
export class JNIExceptionWrapper$ExceptionHandlerContext extends Object {
    constructor(env: JNI$JNIEnv, throwable: JNI$JThrowable)
    readonly env: JNI$JNIEnv;
    readonly throwable: JNI$JThrowable;
    getEnv(): JNI$JNIEnv;
    getThrowable(): JNI$JThrowable;
    getThrowableClassName(): string;
    throwJNIExceptionWrapper(): void;
}