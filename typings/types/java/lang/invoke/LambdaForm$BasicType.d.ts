import type { Class } from '../../../java/lang/Class.d.ts'
import type { TypeKind } from '../../../java/lang/classfile/TypeKind.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { Wrapper } from '../../../sun/invoke/util/Wrapper.d.ts'
export class LambdaForm$BasicType extends Enum<LambdaForm$BasicType> {
    static D_TYPE: LambdaForm$BasicType;
    static F_TYPE: LambdaForm$BasicType;
    static I_TYPE: LambdaForm$BasicType;
    static J_TYPE: LambdaForm$BasicType;
    static L_TYPE: LambdaForm$BasicType;
    static V_TYPE: LambdaForm$BasicType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): LambdaForm$BasicType;
    static values(): LambdaForm$BasicType[];
    private constructor(arg2: string, arg3: Class<Object>, arg4: Wrapper, arg5: TypeKind)
    // private btChar: string;
    // private btClass: Class<Object>;
    // private btKind: TypeKind;
    // private btWrapper: Wrapper;
    basicTypeChar(): string;
    basicTypeClass(): Class<Object>;
    basicTypeKind(): TypeKind;
    basicTypeSlots(): number;
    basicTypeWrapper(): Wrapper;
    name(): "L_TYPE" | "I_TYPE" | "J_TYPE" | "F_TYPE" | "D_TYPE" | "V_TYPE";
}