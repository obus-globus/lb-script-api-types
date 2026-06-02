import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClassId$Companion } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId$Companion.d.ts'
import type { FqName } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { Name } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export class ClassId extends Object {
    static Companion: ClassId$Companion;
    static topLevel(paramarg0: FqName): ClassId;
    constructor(arg0: FqName, arg1: FqName, arg2: boolean)
    constructor(arg0: FqName, arg1: Name)
    // private isLocal: boolean;
    readonly packageFqName: FqName;
    readonly relativeClassName: FqName;
    asSingleFqName(): FqName;
    asString(): string;
    createNestedClassId(arg0: Name): ClassId;
    equals(arg0: Object | null): boolean;
    getOuterClassId(): ClassId;
    getPackageFqName(): FqName;
    getRelativeClassName(): FqName;
    getShortClassName(): Name;
    hashCode(): number;
    isLocal(): boolean;
    isNestedClass(): boolean;
    toString(): string;
}