import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { Lazy } from '../../../../../../kotlin/Lazy.d.ts'
import type { PrimitiveType$Companion } from '../../../../../../kotlin/reflect/jvm/internal/impl/builtins/PrimitiveType$Companion.d.ts'
import type { FqName } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { Name } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export class PrimitiveType extends Enum<PrimitiveType> {
    static BOOLEAN: PrimitiveType;
    static BYTE: PrimitiveType;
    static CHAR: PrimitiveType;
    static Companion: PrimitiveType$Companion;
    static DOUBLE: PrimitiveType;
    static FLOAT: PrimitiveType;
    static INT: PrimitiveType;
    static LONG: PrimitiveType;
    static NUMBER_TYPES: PrimitiveType[];
    static SHORT: PrimitiveType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PrimitiveType;
    static values(): PrimitiveType[];
    private constructor(arg2: string)
    // private arrayTypeFqName$delegate: Lazy<Object>;
    readonly arrayTypeName: Name;
    // private typeFqName$delegate: Lazy<Object>;
    readonly typeName: Name;
    getArrayTypeFqName(): FqName;
    getArrayTypeName(): Name;
    getTypeFqName(): FqName;
    getTypeName(): Name;
    name(): "BOOLEAN" | "CHAR" | "BYTE" | "SHORT" | "INT" | "FLOAT" | "LONG" | "DOUBLE";
}