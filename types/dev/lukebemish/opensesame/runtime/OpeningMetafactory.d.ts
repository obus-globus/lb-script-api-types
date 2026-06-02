import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { CallSite } from '../../../../java/lang/invoke/CallSite.d.ts'
import type { MethodHandle } from '../../../../java/lang/invoke/MethodHandle.d.ts'
import type { MethodHandles$Lookup } from '../../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
import type { MethodType } from '../../../../java/lang/invoke/MethodType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OpeningMetafactory extends Object {
    static ARRAY_TYPE: number;
    static CONSTRUCT_TYPE: number;
    static INSTANCE_GET_TYPE: number;
    static INSTANCE_SET_TYPE: number;
    static SPECIAL_TYPE: number;
    static STATIC_GET_TYPE: number;
    static STATIC_SET_TYPE: number;
    static STATIC_TYPE: number;
    static VIRTUAL_TYPE: number;
    static invoke(paramarg0: MethodHandles$Lookup, paramarg1: string, paramarg2: MethodType, paramarg3: MethodHandle, paramarg4: MethodHandle, paramarg5: number): CallSite;
    static invokeKnown(paramarg0: MethodHandles$Lookup, paramarg1: string, paramarg2: MethodType, paramarg3: Class<Object>, paramarg4: number): CallSite;
    static invokeKnownUnsafe(paramarg0: MethodHandles$Lookup, paramarg1: string, paramarg2: MethodType, paramarg3: Class<Object>, paramarg4: number): CallSite;
    static invokeUnsafe(paramarg0: MethodHandles$Lookup, paramarg1: string, paramarg2: MethodType, paramarg3: MethodHandle, paramarg4: MethodHandle, paramarg5: number): CallSite;
    static makeOpenClass(paramarg0: MethodHandles$Lookup, paramarg1: string, paramarg2: MethodType, paramarg3: MethodHandle, paramarg4: MethodHandle, paramarg5: MethodHandle, paramarg6: MethodHandle): CallSite;
    static makeOpenClassUnsafe(paramarg0: MethodHandles$Lookup, paramarg1: string, paramarg2: MethodType, paramarg3: MethodHandle, paramarg4: MethodHandle, paramarg5: MethodHandle, paramarg6: MethodHandle): CallSite;
    static remapClass(paramarg0: string, paramarg1: Class<Object>): string;
    static remapClass(paramarg0: string, paramarg1: ClassLoader): string;
    static remapField(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: Class<Object>): string;
    static remapField(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: ClassLoader): string;
    static remapMethod(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: Class<Object>): string;
    static remapMethod(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: ClassLoader): string;
    private constructor()
}