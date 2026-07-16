import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { ClassId } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { Name } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export class UnsignedArrayType extends Enum<UnsignedArrayType> {
    static UBYTEARRAY: UnsignedArrayType;
    static UINTARRAY: UnsignedArrayType;
    static ULONGARRAY: UnsignedArrayType;
    static USHORTARRAY: UnsignedArrayType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): UnsignedArrayType;
    static values(): UnsignedArrayType[];
    private constructor(arg2: ClassId)
    // private classId: ClassId;
    readonly typeName: Name;
    getTypeName(): Name;
    name(): "UBYTEARRAY" | "USHORTARRAY" | "UINTARRAY" | "ULONGARRAY";
}