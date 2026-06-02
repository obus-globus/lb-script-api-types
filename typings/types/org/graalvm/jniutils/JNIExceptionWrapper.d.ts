import type { RuntimeException } from '../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { JNI$JNIEnv } from '../../../org/graalvm/jniutils/JNI$JNIEnv.d.ts'
import type { JNI$JThrowable } from '../../../org/graalvm/jniutils/JNI$JThrowable.d.ts'
import type { JNIExceptionWrapper$ExceptionHandler } from '../../../org/graalvm/jniutils/JNIExceptionWrapper$ExceptionHandler.d.ts'
export class JNIExceptionWrapper extends RuntimeException {
    static createHSException(paramenv: JNI$JNIEnv, paramoriginal: Throwable): JNI$JThrowable;
    static mergeStackTraces(paramhotSpotStackTrace: (Object | null)[], paramnativeStackTrace: (Object | null)[], paramoriginatedInHotSpot: boolean): (Object | null)[];
    static throwInHotSpot(paramenv: JNI$JNIEnv, paramoriginal: Throwable): void;
    static wrapAndThrowPendingJNIException(paramenv: JNI$JNIEnv): void;
    static wrapAndThrowPendingJNIException(paramenv: JNI$JNIEnv, paramexceptionHandler: JNIExceptionWrapper$ExceptionHandler): void;
    private constructor(env: JNI$JNIEnv, throwableHandle: JNI$JThrowable)
    // private throwableHandle: JNI$JThrowable;
    // private throwableRequiresStackTraceUpdate: boolean;
    // private createMergedStackTrace(env: JNI$JNIEnv): boolean;
}