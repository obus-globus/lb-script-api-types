import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { ClassId } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { Name } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export class UnsignedType extends Enum<UnsignedType> {
    static UBYTE: UnsignedType;
    static UINT: UnsignedType;
    static ULONG: UnsignedType;
    static USHORT: UnsignedType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): UnsignedType;
    static values(): (Object | null)[];
    private constructor(arg2: ClassId)
    readonly arrayClassId: ClassId;
    readonly classId: ClassId;
    readonly typeName: Name;
    getArrayClassId(): ClassId;
    getClassId(): ClassId;
    getTypeName(): Name;
    name(): "UBYTE" | "USHORT" | "UINT" | "ULONG";
}