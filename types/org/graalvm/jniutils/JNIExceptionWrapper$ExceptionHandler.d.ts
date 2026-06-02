import type { Object } from '../../../java/lang/Object.d.ts'
import type { JNIExceptionWrapper$ExceptionHandlerContext } from '../../../org/graalvm/jniutils/JNIExceptionWrapper$ExceptionHandlerContext.d.ts'
export interface JNIExceptionWrapper$ExceptionHandler extends Object{
    handleException(context: JNIExceptionWrapper$ExceptionHandlerContext): void;
}