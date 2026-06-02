import type { Class } from '../../../java/lang/Class.d.ts'
import type { ClassDesc } from '../../../java/lang/constant/ClassDesc.d.ts'
import type { TypeDescriptor$OfField } from '../../../java/lang/invoke/TypeDescriptor$OfField.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class TypeKind extends Enum<TypeKind> {
    static BOOLEAN: TypeKind;
    static BYTE: TypeKind;
    static CHAR: TypeKind;
    static DOUBLE: TypeKind;
    static FLOAT: TypeKind;
    static INT: TypeKind;
    static LONG: TypeKind;
    static REFERENCE: TypeKind;
    static SHORT: TypeKind;
    static VOID: TypeKind;
    static from(paramarg0: TypeDescriptor$OfField<Object>): TypeKind;
    static fromDescriptor(paramarg0: CharSequence): TypeKind;
    static fromNewarrayCode(paramarg0: number): TypeKind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TypeKind;
    static values(): (Object | null)[];
    private constructor(arg2: number, arg3: number)
    // private newarrayCode: number;
    // private slots: number;
    // private upperBound: ClassDesc;
    asLoadable(): TypeKind;
    // private fetchUpperBound(): ClassDesc;
    newarrayCode(): number;
    slotSize(): number;
    upperBound(): ClassDesc;
    name(): "BOOLEAN" | "BYTE" | "CHAR" | "SHORT" | "INT" | "LONG" | "FLOAT" | "DOUBLE" | "REFERENCE" | "VOID";
}