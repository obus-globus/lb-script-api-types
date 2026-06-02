import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Field } from '../../../../java/lang/reflect/Field.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Buffer } from '../../../../java/nio/Buffer.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { DoubleBuffer } from '../../../../java/nio/DoubleBuffer.d.ts'
import type { FloatBuffer } from '../../../../java/nio/FloatBuffer.d.ts'
import type { IntBuffer } from '../../../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../../../java/nio/LongBuffer.d.ts'
import type { ShortBuffer } from '../../../../java/nio/ShortBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../../org/lwjgl/PointerBuffer.d.ts'
export class JNINativeInterface extends Object {
    static JNIGlobalRefType: number;
    static JNIInvalidRefType: number;
    static JNILocalRefType: number;
    static JNIWeakGlobalRefType: number;
    static JNI_ABORT: number;
    static JNI_COMMIT: number;
    static JNI_EDETACHED: number;
    static JNI_EEXIST: number;
    static JNI_EINVAL: number;
    static JNI_ENOMEM: number;
    static JNI_ERR: number;
    static JNI_EVERSION: number;
    static JNI_FALSE: number;
    static JNI_OK: number;
    static JNI_TRUE: number;
    static JNI_VERSION_10: number;
    static JNI_VERSION_19: number;
    static JNI_VERSION_1_1: number;
    static JNI_VERSION_1_2: number;
    static JNI_VERSION_1_4: number;
    static JNI_VERSION_1_6: number;
    static JNI_VERSION_1_8: number;
    static JNI_VERSION_20: number;
    static JNI_VERSION_21: number;
    static JNI_VERSION_24: number;
    static JNI_VERSION_9: number;
    static DeleteGlobalRef(paramarg0: number): void;
    static DeleteWeakGlobalRef(paramarg0: number): void;
    static FromReflectedField(paramarg0: Field): number;
    static FromReflectedMethod(paramarg0: Method): number;
    static GetBooleanArrayElements(paramarg0: number[], paramarg1: ByteBuffer): ByteBuffer;
    static GetBooleanArrayRegion(paramarg0: number[], paramarg1: number, paramarg2: ByteBuffer): void;
    static GetByteArrayElements(paramarg0: number[], paramarg1: ByteBuffer): ByteBuffer;
    static GetByteArrayRegion(paramarg0: number[], paramarg1: number, paramarg2: ByteBuffer): void;
    static GetCharArrayElements(paramarg0: string[], paramarg1: ByteBuffer): ShortBuffer;
    static GetCharArrayRegion(paramarg0: string[], paramarg1: number, paramarg2: ShortBuffer): void;
    static GetDirectBufferAddress(paramarg0: Buffer): number;
    static GetDoubleArrayElements(paramarg0: number[], paramarg1: ByteBuffer): DoubleBuffer;
    static GetDoubleArrayRegion(paramarg0: number[], paramarg1: number, paramarg2: DoubleBuffer): void;
    static GetFloatArrayElements(paramarg0: number[], paramarg1: ByteBuffer): FloatBuffer;
    static GetFloatArrayRegion(paramarg0: number[], paramarg1: number, paramarg2: FloatBuffer): void;
    static GetIntArrayElements(paramarg0: number[], paramarg1: ByteBuffer): IntBuffer;
    static GetIntArrayRegion(paramarg0: number[], paramarg1: number, paramarg2: IntBuffer): void;
    static GetJavaVM(paramarg0: PointerBuffer): number;
    static GetLongArrayElements(paramarg0: number[], paramarg1: ByteBuffer): LongBuffer;
    static GetLongArrayRegion(paramarg0: number[], paramarg1: number, paramarg2: LongBuffer): void;
    static GetObjectRefType(paramarg0: Object): number;
    static GetShortArrayElements(paramarg0: number[], paramarg1: ByteBuffer): ShortBuffer;
    static GetShortArrayRegion(paramarg0: number[], paramarg1: number, paramarg2: ShortBuffer): void;
    static GetStringRegion(paramarg0: string, paramarg1: number, paramarg2: ByteBuffer): void;
    static GetStringUTFRegion(paramarg0: string, paramarg1: number, paramarg2: number, paramarg3: ByteBuffer): void;
    static GetVersion(): number;
    static NewDirectByteBuffer(paramarg0: number, paramarg1: number): ByteBuffer;
    static NewGlobalRef(paramarg0: Object): number;
    static NewWeakGlobalRef(paramarg0: Object): number;
    static RegisterNatives(paramarg0: Class<Object>, paramarg1: (Object | null)[]): number;
    static ReleaseBooleanArrayElements(paramarg0: number[], paramarg1: ByteBuffer, paramarg2: number): void;
    static ReleaseByteArrayElements(paramarg0: number[], paramarg1: ByteBuffer, paramarg2: number): void;
    static ReleaseCharArrayElements(paramarg0: string[], paramarg1: ShortBuffer, paramarg2: number): void;
    static ReleaseDoubleArrayElements(paramarg0: number[], paramarg1: DoubleBuffer, paramarg2: number): void;
    static ReleaseFloatArrayElements(paramarg0: number[], paramarg1: FloatBuffer, paramarg2: number): void;
    static ReleaseIntArrayElements(paramarg0: number[], paramarg1: IntBuffer, paramarg2: number): void;
    static ReleaseLongArrayElements(paramarg0: number[], paramarg1: LongBuffer, paramarg2: number): void;
    static ReleaseShortArrayElements(paramarg0: number[], paramarg1: ShortBuffer, paramarg2: number): void;
    static SetBooleanArrayRegion(paramarg0: number[], paramarg1: number, paramarg2: ByteBuffer): void;
    static SetByteArrayRegion(paramarg0: number[], paramarg1: number, paramarg2: ByteBuffer): void;
    static SetCharArrayRegion(paramarg0: string[], paramarg1: number, paramarg2: ShortBuffer): void;
    static SetDoubleArrayRegion(paramarg0: number[], paramarg1: number, paramarg2: DoubleBuffer): void;
    static SetFloatArrayRegion(paramarg0: number[], paramarg1: number, paramarg2: FloatBuffer): void;
    static SetIntArrayRegion(paramarg0: number[], paramarg1: number, paramarg2: IntBuffer): void;
    static SetLongArrayRegion(paramarg0: number[], paramarg1: number, paramarg2: LongBuffer): void;
    static SetShortArrayRegion(paramarg0: number[], paramarg1: number, paramarg2: ShortBuffer): void;
    static ToReflectedField(paramarg0: Class<Object>, paramarg1: number, paramarg2: boolean): Field;
    static ToReflectedMethod(paramarg0: Class<Object>, paramarg1: number, paramarg2: boolean): Method;
    static UnregisterNatives(paramarg0: Class<Object>): number;
    static nDeleteGlobalRef(paramarg0: number): void;
    static nDeleteWeakGlobalRef(paramarg0: number): void;
    static nGetBooleanArrayElements(paramarg0: number[], paramarg1: number): number;
    static nGetBooleanArrayRegion(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nGetByteArrayElements(paramarg0: number[], paramarg1: number): number;
    static nGetByteArrayRegion(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nGetCharArrayElements(paramarg0: string[], paramarg1: number): number;
    static nGetCharArrayRegion(paramarg0: string[], paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nGetDoubleArrayElements(paramarg0: number[], paramarg1: number): number;
    static nGetDoubleArrayRegion(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nGetFloatArrayElements(paramarg0: number[], paramarg1: number): number;
    static nGetFloatArrayRegion(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nGetIntArrayElements(paramarg0: number[], paramarg1: number): number;
    static nGetIntArrayRegion(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nGetJavaVM(paramarg0: number): number;
    static nGetLongArrayElements(paramarg0: number[], paramarg1: number): number;
    static nGetLongArrayRegion(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nGetShortArrayElements(paramarg0: number[], paramarg1: number): number;
    static nGetShortArrayRegion(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nGetStringRegion(paramarg0: string, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nGetStringUTFRegion(paramarg0: string, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nNewDirectByteBuffer(paramarg0: number, paramarg1: number): ByteBuffer;
    static nRegisterNatives(paramarg0: Class<Object>, paramarg1: number, paramarg2: number): number;
    static nReleaseBooleanArrayElements(paramarg0: number[], paramarg1: number, paramarg2: number): void;
    static nReleaseByteArrayElements(paramarg0: number[], paramarg1: number, paramarg2: number): void;
    static nReleaseCharArrayElements(paramarg0: string[], paramarg1: number, paramarg2: number): void;
    static nReleaseDoubleArrayElements(paramarg0: number[], paramarg1: number, paramarg2: number): void;
    static nReleaseFloatArrayElements(paramarg0: number[], paramarg1: number, paramarg2: number): void;
    static nReleaseIntArrayElements(paramarg0: number[], paramarg1: number, paramarg2: number): void;
    static nReleaseLongArrayElements(paramarg0: number[], paramarg1: number, paramarg2: number): void;
    static nReleaseShortArrayElements(paramarg0: number[], paramarg1: number, paramarg2: number): void;
    static nSetBooleanArrayRegion(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nSetByteArrayRegion(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nSetCharArrayRegion(paramarg0: string[], paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nSetDoubleArrayRegion(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nSetFloatArrayRegion(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nSetIntArrayRegion(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nSetLongArrayRegion(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nSetShortArrayRegion(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nToReflectedField(paramarg0: Class<Object>, paramarg1: number, paramarg2: boolean): Field;
    static nToReflectedMethod(paramarg0: Class<Object>, paramarg1: number, paramarg2: boolean): Method;
    static noop(): void;
    constructor()
}