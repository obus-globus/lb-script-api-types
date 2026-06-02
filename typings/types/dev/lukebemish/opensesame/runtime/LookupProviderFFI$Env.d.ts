import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Arena } from '../../../../java/lang/foreign/Arena.d.ts'
import type { MemorySegment } from '../../../../java/lang/foreign/MemorySegment.d.ts'
import type { MethodHandle } from '../../../../java/lang/invoke/MethodHandle.d.ts'
import type { MethodType } from '../../../../java/lang/invoke/MethodType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LookupProviderFFI$Env extends Object implements AutoCloseable {
    private constructor(arg0: Arena)
    // private DeleteGlobalRef: MethodHandle;
    // private FindClass: MethodHandle;
    // private GetEnv: MethodHandle;
    // private GetMethodID: MethodHandle;
    // private GetStaticFieldID: MethodHandle;
    // private GetStaticMethodID: MethodHandle;
    // private GetStaticObjectField: MethodHandle;
    // private JNI_GetCreatedJavaVMs: MethodHandle;
    // private NewGlobalRef: MethodHandle;
    // private PopLocalFrame: MethodHandle;
    // private SetStaticObjectField: MethodHandle;
    // private arena: Arena;
    // private env: MemorySegment;
    // private globalRefs: MemorySegment[];
    // private callObjectMethod(arg0: MemorySegment, arg1: MemorySegment, arg2: MemorySegment[]): MemorySegment;
    // private callStaticMethod(arg0: MemorySegment, arg1: MemorySegment, arg2: MemorySegment[]): MemorySegment;
    close(): void;
    // private deleteGlobalRef(arg0: MemorySegment): void;
    // private getJavaVm(): MemorySegment;
    // private getJniClass(arg0: Class<Object>): MemorySegment;
    // private getJniEnv(arg0: MemorySegment): MemorySegment;
    // private getMethodId(arg0: MemorySegment, arg1: string, arg2: MethodType): MemorySegment;
    // private getStaticFieldId(arg0: MemorySegment, arg1: string, arg2: Class<Object>): MemorySegment;
    // private getStaticMethodId(arg0: MemorySegment, arg1: string, arg2: MethodType): MemorySegment;
    // private getStaticObjectField(arg0: MemorySegment, arg1: MemorySegment): MemorySegment;
    // private putStaticObjectField(arg0: MemorySegment, arg1: MemorySegment, arg2: MemorySegment): void;
    // private withGlobalRef(arg0: MethodHandle): MethodHandle;
}