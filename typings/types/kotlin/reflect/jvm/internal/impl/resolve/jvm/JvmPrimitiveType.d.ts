import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { PrimitiveType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/PrimitiveType.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
export class JvmPrimitiveType extends Enum<JvmPrimitiveType> {
    static BOOLEAN: JvmPrimitiveType;
    static BYTE: JvmPrimitiveType;
    static CHAR: JvmPrimitiveType;
    static DOUBLE: JvmPrimitiveType;
    static FLOAT: JvmPrimitiveType;
    static INT: JvmPrimitiveType;
    static LONG: JvmPrimitiveType;
    static SHORT: JvmPrimitiveType;
    static get(paramarg0: string): JvmPrimitiveType;
    static get(paramarg0: PrimitiveType): JvmPrimitiveType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): JvmPrimitiveType;
    static values(): JvmPrimitiveType[];
    private constructor(arg2: PrimitiveType, arg3: string, arg4: string, arg5: string)
    readonly desc: string;
    // private name: string;
    readonly primitiveType: PrimitiveType;
    readonly wrapperFqName: FqName;
    getDesc(): string;
    getJavaKeywordName(): string;
    getPrimitiveType(): PrimitiveType;
    getWrapperFqName(): FqName;
    name(): "BOOLEAN" | "CHAR" | "BYTE" | "SHORT" | "INT" | "FLOAT" | "LONG" | "DOUBLE";
}