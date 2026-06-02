import type { Class } from '../../../java/lang/Class.d.ts'
import type { VarHandle$AccessType } from '../../../java/lang/invoke/VarHandle$AccessType.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class VarHandle$AccessMode extends Enum<VarHandle$AccessMode> {
    static COMPARE_AND_EXCHANGE: VarHandle$AccessMode;
    static COMPARE_AND_EXCHANGE_ACQUIRE: VarHandle$AccessMode;
    static COMPARE_AND_EXCHANGE_RELEASE: VarHandle$AccessMode;
    static COMPARE_AND_SET: VarHandle$AccessMode;
    static GET: VarHandle$AccessMode;
    static GET_ACQUIRE: VarHandle$AccessMode;
    static GET_AND_ADD: VarHandle$AccessMode;
    static GET_AND_ADD_ACQUIRE: VarHandle$AccessMode;
    static GET_AND_ADD_RELEASE: VarHandle$AccessMode;
    static GET_AND_BITWISE_AND: VarHandle$AccessMode;
    static GET_AND_BITWISE_AND_ACQUIRE: VarHandle$AccessMode;
    static GET_AND_BITWISE_AND_RELEASE: VarHandle$AccessMode;
    static GET_AND_BITWISE_OR: VarHandle$AccessMode;
    static GET_AND_BITWISE_OR_ACQUIRE: VarHandle$AccessMode;
    static GET_AND_BITWISE_OR_RELEASE: VarHandle$AccessMode;
    static GET_AND_BITWISE_XOR: VarHandle$AccessMode;
    static GET_AND_BITWISE_XOR_ACQUIRE: VarHandle$AccessMode;
    static GET_AND_BITWISE_XOR_RELEASE: VarHandle$AccessMode;
    static GET_AND_SET: VarHandle$AccessMode;
    static GET_AND_SET_ACQUIRE: VarHandle$AccessMode;
    static GET_AND_SET_RELEASE: VarHandle$AccessMode;
    static GET_OPAQUE: VarHandle$AccessMode;
    static GET_VOLATILE: VarHandle$AccessMode;
    static SET: VarHandle$AccessMode;
    static SET_OPAQUE: VarHandle$AccessMode;
    static SET_RELEASE: VarHandle$AccessMode;
    static SET_VOLATILE: VarHandle$AccessMode;
    static WEAK_COMPARE_AND_SET: VarHandle$AccessMode;
    static WEAK_COMPARE_AND_SET_ACQUIRE: VarHandle$AccessMode;
    static WEAK_COMPARE_AND_SET_PLAIN: VarHandle$AccessMode;
    static WEAK_COMPARE_AND_SET_RELEASE: VarHandle$AccessMode;
    static valueFromMethodName(paramarg0: string): VarHandle$AccessMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): VarHandle$AccessMode;
    static values(): (Object | null)[];
    private constructor(arg2: string, arg3: VarHandle$AccessType)
    // private at: VarHandle$AccessType;
    // private methodName: string;
    methodName(): string;
    name(): "GET" | "SET" | "GET_VOLATILE" | "SET_VOLATILE" | "GET_ACQUIRE" | "SET_RELEASE" | "GET_OPAQUE" | "SET_OPAQUE" | "COMPARE_AND_SET" | "COMPARE_AND_EXCHANGE" | "COMPARE_AND_EXCHANGE_ACQUIRE" | "COMPARE_AND_EXCHANGE_RELEASE" | "WEAK_COMPARE_AND_SET_PLAIN" | "WEAK_COMPARE_AND_SET" | "WEAK_COMPARE_AND_SET_ACQUIRE" | "WEAK_COMPARE_AND_SET_RELEASE" | "GET_AND_SET" | "GET_AND_SET_ACQUIRE" | "GET_AND_SET_RELEASE" | "GET_AND_ADD" | "GET_AND_ADD_ACQUIRE" | "GET_AND_ADD_RELEASE" | "GET_AND_BITWISE_OR" | "GET_AND_BITWISE_OR_RELEASE" | "GET_AND_BITWISE_OR_ACQUIRE" | "GET_AND_BITWISE_AND" | "GET_AND_BITWISE_AND_RELEASE" | "GET_AND_BITWISE_AND_ACQUIRE" | "GET_AND_BITWISE_XOR" | "GET_AND_BITWISE_XOR_RELEASE" | "GET_AND_BITWISE_XOR_ACQUIRE";
}