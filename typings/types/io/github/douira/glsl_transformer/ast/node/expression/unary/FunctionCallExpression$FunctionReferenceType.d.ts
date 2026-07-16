import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class FunctionCallExpression$FunctionReferenceType extends Enum<FunctionCallExpression$FunctionReferenceType> {
    static NAME: FunctionCallExpression$FunctionReferenceType;
    static TYPE_SPECIFIER: FunctionCallExpression$FunctionReferenceType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): FunctionCallExpression$FunctionReferenceType;
    static values(): FunctionCallExpression$FunctionReferenceType[];
    private constructor()
    name(): "NAME" | "TYPE_SPECIFIER";
}