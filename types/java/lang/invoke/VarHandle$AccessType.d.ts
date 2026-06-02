import type { Class } from '../../../java/lang/Class.d.ts'
import type { MethodType } from '../../../java/lang/invoke/MethodType.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class VarHandle$AccessType extends Enum<VarHandle$AccessType> {
    static COMPARE_AND_EXCHANGE: VarHandle$AccessType;
    static COMPARE_AND_SET: VarHandle$AccessType;
    static GET: VarHandle$AccessType;
    static GET_AND_UPDATE: VarHandle$AccessType;
    static SET: VarHandle$AccessType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): VarHandle$AccessType;
    static values(): (Object | null)[];
    private constructor(arg2: Class<Object>)
    // private isMonomorphicInReturnType: boolean;
    // private returnType: Class<Object>;
    accessModeType(arg0: Class<Object>, arg1: Class<Object>, arg2: Class<Object>[]): MethodType;
    name(): "GET" | "SET" | "COMPARE_AND_SET" | "COMPARE_AND_EXCHANGE" | "GET_AND_UPDATE";
}