import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { JNI$JArray } from '../../../org/graalvm/jniutils/JNI$JArray.d.ts'
import type { JNI$JBooleanArray } from '../../../org/graalvm/jniutils/JNI$JBooleanArray.d.ts'
import type { JNI$JByteArray } from '../../../org/graalvm/jniutils/JNI$JByteArray.d.ts'
import type { JNI$JCharArray } from '../../../org/graalvm/jniutils/JNI$JCharArray.d.ts'
import type { JNI$JClass } from '../../../org/graalvm/jniutils/JNI$JClass.d.ts'
import type { JNI$JDoubleArray } from '../../../org/graalvm/jniutils/JNI$JDoubleArray.d.ts'
import type { JNI$JFieldID } from '../../../org/graalvm/jniutils/JNI$JFieldID.d.ts'
import type { JNI$JFloatArray } from '../../../org/graalvm/jniutils/JNI$JFloatArray.d.ts'
import type { JNI$JIntArray } from '../../../org/graalvm/jniutils/JNI$JIntArray.d.ts'
import type { JNI$JLongArray } from '../../../org/graalvm/jniutils/JNI$JLongArray.d.ts'
import type { JNI$JMethodID } from '../../../org/graalvm/jniutils/JNI$JMethodID.d.ts'
import type { JNI$JNIEnv } from '../../../org/graalvm/jniutils/JNI$JNIEnv.d.ts'
import type { JNI$JObject } from '../../../org/graalvm/jniutils/JNI$JObject.d.ts'
import type { JNI$JObjectArray } from '../../../org/graalvm/jniutils/JNI$JObjectArray.d.ts'
import type { JNI$JShortArray } from '../../../org/graalvm/jniutils/JNI$JShortArray.d.ts'
import type { JNI$JString } from '../../../org/graalvm/jniutils/JNI$JString.d.ts'
import type { JNI$JThrowable } from '../../../org/graalvm/jniutils/JNI$JThrowable.d.ts'
import type { JNI$JValue } from '../../../org/graalvm/jniutils/JNI$JValue.d.ts'
import type { JNI$JWeak } from '../../../org/graalvm/jniutils/JNI$JWeak.d.ts'
import type { JNI$JavaVM } from '../../../org/graalvm/jniutils/JNI$JavaVM.d.ts'
import type { JNI$JavaVMAttachArgs } from '../../../org/graalvm/jniutils/JNI$JavaVMAttachArgs.d.ts'
import type { CCharPointer } from '../../../org/graalvm/nativeimage/c/type/CCharPointer.d.ts'
import type { CDoublePointer } from '../../../org/graalvm/nativeimage/c/type/CDoublePointer.d.ts'
import type { CFloatPointer } from '../../../org/graalvm/nativeimage/c/type/CFloatPointer.d.ts'
import type { CIntPointer } from '../../../org/graalvm/nativeimage/c/type/CIntPointer.d.ts'
import type { CLongPointer } from '../../../org/graalvm/nativeimage/c/type/CLongPointer.d.ts'
import type { CShortPointer } from '../../../org/graalvm/nativeimage/c/type/CShortPointer.d.ts'
import type { VoidPointer } from '../../../org/graalvm/nativeimage/c/type/VoidPointer.d.ts'
export class JNIUtil extends Object {
    static AttachCurrentThread(paramvm: JNI$JavaVM, paramargs: JNI$JavaVMAttachArgs): JNI$JNIEnv;
    static AttachCurrentThreadAsDaemon(paramvm: JNI$JavaVM, paramargs: JNI$JavaVMAttachArgs): JNI$JNIEnv;
    static DefineClass(paramenv: JNI$JNIEnv, paramname: CCharPointer, paramloader: JNI$JObject, parambuf: CCharPointer, parambufLen: number): JNI$JClass;
    static DeleteGlobalRef(paramenv: JNI$JNIEnv, paramref: JNI$JObject): void;
    static DeleteLocalRef(paramenv: JNI$JNIEnv, paramref: JNI$JObject): void;
    static DeleteWeakGlobalRef(paramenv: JNI$JNIEnv, paramref: JNI$JWeak): void;
    static DetachCurrentThread(paramvm: JNI$JavaVM): boolean;
    static ExceptionCheck(paramenv: JNI$JNIEnv): boolean;
    static ExceptionClear(paramenv: JNI$JNIEnv): void;
    static ExceptionDescribe(paramenv: JNI$JNIEnv): void;
    static ExceptionOccurred(paramenv: JNI$JNIEnv): JNI$JThrowable;
    static FindClass(paramenv: JNI$JNIEnv, paramname: CCharPointer): JNI$JClass;
    static GetArrayLength(paramenv: JNI$JNIEnv, paramarray: JNI$JArray): number;
    static GetBooleanArrayElements(paramenv: JNI$JNIEnv, paramarray: JNI$JBooleanArray, paramisCopy: JNI$JValue): CCharPointer;
    static GetBooleanArrayRegion(paramenv: JNI$JNIEnv, paramarray: JNI$JBooleanArray, paramoffset: number, paramlen: number, parambuff: CCharPointer): void;
    static GetByteArrayElements(paramenv: JNI$JNIEnv, paramarray: JNI$JByteArray, paramisCopy: JNI$JValue): CCharPointer;
    static GetByteArrayRegion(paramenv: JNI$JNIEnv, paramarray: JNI$JByteArray, paramoffset: number, paramlen: number, parambuff: CCharPointer): void;
    static GetCharArrayElements(paramenv: JNI$JNIEnv, paramarray: JNI$JCharArray, paramisCopy: JNI$JValue): CShortPointer;
    static GetCharArrayRegion(paramenv: JNI$JNIEnv, paramarray: JNI$JCharArray, paramoffset: number, paramlen: number, parambuff: CShortPointer): void;
    static GetDirectBufferAddress(paramenv: JNI$JNIEnv, parambuf: JNI$JObject): VoidPointer;
    static GetDoubleArrayElements(paramenv: JNI$JNIEnv, paramarray: JNI$JDoubleArray, paramisCopy: JNI$JValue): CDoublePointer;
    static GetDoubleArrayRegion(paramenv: JNI$JNIEnv, paramarray: JNI$JDoubleArray, paramoffset: number, paramlen: number, parambuff: CDoublePointer): void;
    static GetEnv(paramvm: JNI$JavaVM): JNI$JNIEnv;
    static GetFieldID(paramenv: JNI$JNIEnv, paramclazz: JNI$JClass, paramname: CCharPointer, paramsignature: CCharPointer): JNI$JFieldID;
    static GetFloatArrayElements(paramenv: JNI$JNIEnv, paramarray: JNI$JFloatArray, paramisCopy: JNI$JValue): CFloatPointer;
    static GetFloatArrayRegion(paramenv: JNI$JNIEnv, paramarray: JNI$JFloatArray, paramoffset: number, paramlen: number, parambuff: CFloatPointer): void;
    static GetIntArrayElements(paramenv: JNI$JNIEnv, paramarray: JNI$JIntArray, paramisCopy: JNI$JValue): CIntPointer;
    static GetIntArrayRegion(paramenv: JNI$JNIEnv, paramarray: JNI$JIntArray, paramoffset: number, paramlen: number, parambuff: CIntPointer): void;
    static GetIntField(paramenv: JNI$JNIEnv, paramobject: JNI$JObject, paramfieldID: JNI$JFieldID): number;
    static GetJavaVM(paramenv: JNI$JNIEnv): JNI$JavaVM;
    static GetLongArrayElements(paramenv: JNI$JNIEnv, paramarray: JNI$JLongArray, paramisCopy: JNI$JValue): CLongPointer;
    static GetLongArrayRegion(paramenv: JNI$JNIEnv, paramarray: JNI$JLongArray, paramoffset: number, paramlen: number, parambuff: CLongPointer): void;
    static GetMethodID(paramenv: JNI$JNIEnv, paramclazz: JNI$JClass, paramname: CCharPointer, paramsig: CCharPointer): JNI$JMethodID;
    static GetObjectArrayElement(paramenv: JNI$JNIEnv, paramarray: JNI$JObjectArray, paramindex: number): JNI$JObject;
    static GetObjectClass(paramenv: JNI$JNIEnv, paramobject: JNI$JObject): JNI$JClass;
    static GetShortArrayElements(paramenv: JNI$JNIEnv, paramarray: JNI$JShortArray, paramisCopy: JNI$JValue): CShortPointer;
    static GetShortArrayRegion(paramenv: JNI$JNIEnv, paramarray: JNI$JShortArray, paramoffset: number, paramlen: number, parambuff: CShortPointer): void;
    static GetStaticFieldID(paramenv: JNI$JNIEnv, paramclazz: JNI$JClass, paramname: CCharPointer, paramsig: CCharPointer): JNI$JFieldID;
    static GetStaticMethodID(paramenv: JNI$JNIEnv, paramclazz: JNI$JClass, paramname: CCharPointer, paramsig: CCharPointer): JNI$JMethodID;
    static GetStaticObjectField(paramenv: JNI$JNIEnv, paramclazz: JNI$JClass, paramfieldID: JNI$JFieldID): JNI$JObject;
    static IsInstanceOf(paramenv: JNI$JNIEnv, paramobj: JNI$JObject, paramclazz: JNI$JClass): boolean;
    static IsSameObject(paramenv: JNI$JNIEnv, paramref1: JNI$JObject, paramref2: JNI$JObject): boolean;
    static NewBooleanArray(paramenv: JNI$JNIEnv, paramlen: number): JNI$JBooleanArray;
    static NewByteArray(paramenv: JNI$JNIEnv, paramlen: number): JNI$JByteArray;
    static NewCharArray(paramenv: JNI$JNIEnv, paramlen: number): JNI$JCharArray;
    static NewDoubleArray(paramenv: JNI$JNIEnv, paramlen: number): JNI$JDoubleArray;
    static NewFloatArray(paramenv: JNI$JNIEnv, paramlen: number): JNI$JFloatArray;
    static NewGlobalRef(paramenv: JNI$JNIEnv, paramref: Object | null, paramtype: string): Object | null;
    static NewIntArray(paramenv: JNI$JNIEnv, paramlen: number): JNI$JIntArray;
    static NewLocalRef(paramenv: JNI$JNIEnv, paramref: JNI$JObject): JNI$JObject;
    static NewLongArray(paramenv: JNI$JNIEnv, paramlen: number): JNI$JLongArray;
    static NewObjectArray(paramenv: JNI$JNIEnv, paramlen: number, paramcomponentClass: JNI$JClass, paraminitialElement: JNI$JObject): JNI$JObjectArray;
    static NewShortArray(paramenv: JNI$JNIEnv, paramlen: number): JNI$JShortArray;
    static NewWeakGlobalRef(paramenv: JNI$JNIEnv, paramref: JNI$JObject, paramtype: string): JNI$JWeak;
    static PopLocalFrame(paramenv: JNI$JNIEnv, paramresult: JNI$JObject): JNI$JObject;
    static PushLocalFrame(paramenv: JNI$JNIEnv, paramcapacity: number): number;
    static ReleaseBooleanArrayElements(paramenv: JNI$JNIEnv, paramarray: JNI$JBooleanArray, paramelems: CCharPointer, parammode: number): void;
    static ReleaseByteArrayElements(paramenv: JNI$JNIEnv, paramarray: JNI$JByteArray, paramelems: CCharPointer, parammode: number): void;
    static ReleaseCharArrayElements(paramenv: JNI$JNIEnv, paramarray: JNI$JCharArray, paramelems: CShortPointer, parammode: number): void;
    static ReleaseDoubleArrayElements(paramenv: JNI$JNIEnv, paramarray: JNI$JDoubleArray, paramelems: CDoublePointer, parammode: number): void;
    static ReleaseFloatArrayElements(paramenv: JNI$JNIEnv, paramarray: JNI$JFloatArray, paramelems: CFloatPointer, parammode: number): void;
    static ReleaseIntArrayElements(paramenv: JNI$JNIEnv, paramarray: JNI$JIntArray, paramelems: CIntPointer, parammode: number): void;
    static ReleaseLongArrayElements(paramenv: JNI$JNIEnv, paramarray: JNI$JLongArray, paramelems: CLongPointer, parammode: number): void;
    static ReleaseShortArrayElements(paramenv: JNI$JNIEnv, paramarray: JNI$JShortArray, paramelems: CShortPointer, parammode: number): void;
    static SetBooleanArrayRegion(paramenv: JNI$JNIEnv, paramarray: JNI$JBooleanArray, paramoffset: number, paramlen: number, parambuff: CCharPointer): void;
    static SetByteArrayRegion(paramenv: JNI$JNIEnv, paramarray: JNI$JByteArray, paramoffset: number, paramlen: number, parambuff: CCharPointer): void;
    static SetCharArrayRegion(paramenv: JNI$JNIEnv, paramarray: JNI$JCharArray, paramoffset: number, paramlen: number, parambuff: CShortPointer): void;
    static SetDoubleArrayRegion(paramenv: JNI$JNIEnv, paramarray: JNI$JDoubleArray, paramoffset: number, paramlen: number, parambuff: CDoublePointer): void;
    static SetFloatArrayRegion(paramenv: JNI$JNIEnv, paramarray: JNI$JFloatArray, paramoffset: number, paramlen: number, parambuff: CFloatPointer): void;
    static SetIntArrayRegion(paramenv: JNI$JNIEnv, paramarray: JNI$JIntArray, paramoffset: number, paramlen: number, parambuff: CIntPointer): void;
    static SetLongArrayRegion(paramenv: JNI$JNIEnv, paramarray: JNI$JLongArray, paramoffset: number, paramlen: number, parambuff: CLongPointer): void;
    static SetObjectArrayElement(paramenv: JNI$JNIEnv, paramarray: JNI$JObjectArray, paramindex: number, paramvalue: JNI$JObject): void;
    static SetShortArrayRegion(paramenv: JNI$JNIEnv, paramarray: JNI$JShortArray, paramoffset: number, paramlen: number, parambuff: CShortPointer): void;
    static Throw(paramenv: JNI$JNIEnv, paramthrowable: JNI$JThrowable): void;
    static arrayCopy(paramjniEnv: JNI$JNIEnv, paramsrc: (Object | null)[], paramsrcPos: number, paramdest: JNI$JBooleanArray, paramdestPos: number, paramlength: number): void;
    static arrayCopy(paramjniEnv: JNI$JNIEnv, paramsrc: number[], paramsrcPos: number, paramdest: JNI$JByteArray, paramdestPos: number, paramlength: number): void;
    static arrayCopy(paramjniEnv: JNI$JNIEnv, paramsrc: string[], paramsrcPos: number, paramdest: JNI$JCharArray, paramdestPos: number, paramlength: number): void;
    static arrayCopy(paramjniEnv: JNI$JNIEnv, paramsrc: number[], paramsrcPos: number, paramdest: JNI$JDoubleArray, paramdestPos: number, paramlength: number): void;
    static arrayCopy(paramjniEnv: JNI$JNIEnv, paramsrc: number[], paramsrcPos: number, paramdest: JNI$JFloatArray, paramdestPos: number, paramlength: number): void;
    static arrayCopy(paramjniEnv: JNI$JNIEnv, paramsrc: number[], paramsrcPos: number, paramdest: JNI$JIntArray, paramdestPos: number, paramlength: number): void;
    static arrayCopy(paramjniEnv: JNI$JNIEnv, paramsrc: number[], paramsrcPos: number, paramdest: JNI$JLongArray, paramdestPos: number, paramlength: number): void;
    static arrayCopy(paramjniEnv: JNI$JNIEnv, paramsrc: JNI$JBooleanArray, paramsrcPos: number, paramdest: (Object | null)[], paramdestPos: number, paramlength: number): void;
    static arrayCopy(paramjniEnv: JNI$JNIEnv, paramsrc: JNI$JByteArray, paramsrcPos: number, paramdest: number[], paramdestPos: number, paramlength: number): void;
    static arrayCopy(paramjniEnv: JNI$JNIEnv, paramsrc: JNI$JCharArray, paramsrcPos: number, paramdest: string[], paramdestPos: number, paramlength: number): void;
    static arrayCopy(paramjniEnv: JNI$JNIEnv, paramsrc: JNI$JDoubleArray, paramsrcPos: number, paramdest: number[], paramdestPos: number, paramlength: number): void;
    static arrayCopy(paramjniEnv: JNI$JNIEnv, paramsrc: JNI$JFloatArray, paramsrcPos: number, paramdest: number[], paramdestPos: number, paramlength: number): void;
    static arrayCopy(paramjniEnv: JNI$JNIEnv, paramsrc: JNI$JIntArray, paramsrcPos: number, paramdest: number[], paramdestPos: number, paramlength: number): void;
    static arrayCopy(paramjniEnv: JNI$JNIEnv, paramsrc: JNI$JLongArray, paramsrcPos: number, paramdest: number[], paramdestPos: number, paramlength: number): void;
    static arrayCopy(paramjniEnv: JNI$JNIEnv, paramsrc: JNI$JShortArray, paramsrcPos: number, paramdest: number[], paramdestPos: number, paramlength: number): void;
    static arrayCopy(paramjniEnv: JNI$JNIEnv, paramsrc: number[], paramsrcPos: number, paramdest: JNI$JShortArray, paramdestPos: number, paramlength: number): void;
    static attachCurrentThread(paramvm: JNI$JavaVM, paramdaemon: boolean, paramname: string, paramthreadGroup: JNI$JObject): JNI$JNIEnv;
    static createArray(paramenv: JNI$JNIEnv, parambooleanArray: JNI$JBooleanArray): (Object | null)[];
    static createArray(paramenv: JNI$JNIEnv, parambyteArray: JNI$JByteArray): number[];
    static createArray(paramenv: JNI$JNIEnv, paramcharArray: JNI$JCharArray): string[];
    static createArray(paramenv: JNI$JNIEnv, paramdoubleArray: JNI$JDoubleArray): number[];
    static createArray(paramenv: JNI$JNIEnv, paramfloatArray: JNI$JFloatArray): number[];
    static createArray(paramenv: JNI$JNIEnv, paramintArray: JNI$JIntArray): number[];
    static createArray(paramenv: JNI$JNIEnv, paramlongArray: JNI$JLongArray): number[];
    static createArray(paramenv: JNI$JNIEnv, paramshortArray: JNI$JShortArray): number[];
    static createHSArray(paramjniEnv: JNI$JNIEnv, parama: (Object | null)[]): JNI$JBooleanArray;
    static createHSArray(paramjniEnv: JNI$JNIEnv, parama: number[]): JNI$JByteArray;
    static createHSArray(paramjniEnv: JNI$JNIEnv, parama: string[]): JNI$JCharArray;
    static createHSArray(paramjniEnv: JNI$JNIEnv, parama: number[]): JNI$JDoubleArray;
    static createHSArray(paramjniEnv: JNI$JNIEnv, parama: number[]): JNI$JFloatArray;
    static createHSArray(paramjniEnv: JNI$JNIEnv, parama: number[]): JNI$JIntArray;
    static createHSArray(paramjniEnv: JNI$JNIEnv, parama: number[]): JNI$JLongArray;
    static createHSArray(paramjniEnv: JNI$JNIEnv, paramarray: (Object | null)[], paramsourcePosition: number, paramlength: number, paramcomponentTypeBinaryName: string): JNI$JObjectArray;
    static createHSArray(paramjniEnv: JNI$JNIEnv, parama: number[]): JNI$JShortArray;
    static createHSString(paramenv: JNI$JNIEnv, paramstring: string): JNI$JString;
    static createString(paramenv: JNI$JNIEnv, paramhsString: JNI$JString): string;
    static encodeFieldSignature(paramtype: Class<Object>): string;
    static encodeMethodSignature(paramreturnType: Class<Object>, paramparameterTypes: Object | null): string;
    static findClass(paramenv: JNI$JNIEnv, parambinaryName: string): JNI$JClass;
    static findClass(paramenv: JNI$JNIEnv, paramclassLoader: JNI$JObject, parambinaryName: string): JNI$JClass;
    static findClass(paramenv: JNI$JNIEnv, paramclassLoader: JNI$JObject, parambinaryName: string, paramrequired: boolean): JNI$JClass;
    static findField(paramenv: JNI$JNIEnv, paramclazz: JNI$JClass, paramstaticField: boolean, paramfieldName: string, paramfieldSignature: string): JNI$JFieldID;
    static findMethod(paramenv: JNI$JNIEnv, paramclazz: JNI$JClass, paramstaticMethod: boolean, parammethodName: string, parammethodSignature: string): JNI$JMethodID;
    static getBinaryName(paramfqn: string): string;
    static getClassLoader(paramenv: JNI$JNIEnv, paramclazz: JNI$JClass): JNI$JObject;
    static getInternalName(paramfqn: string): string;
    static getJVMCIClassLoader(paramenv: JNI$JNIEnv): JNI$JObject;
    static getSystemClassLoader(paramenv: JNI$JNIEnv): JNI$JObject;
    static trace(paramlevel: number, paramformat: string, paramargs: (Object | null)[]): void;
    static trace(paramlevel: number, paramthrowable: Throwable): void;
    static tracingAt(paramlevel: number): boolean;
    private constructor()
}