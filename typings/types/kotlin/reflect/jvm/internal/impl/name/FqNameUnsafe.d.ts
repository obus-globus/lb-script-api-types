import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { FqName } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { FqNameUnsafe$Companion } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/FqNameUnsafe$Companion.d.ts'
import type { Name } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export class FqNameUnsafe extends Object {
    static Companion: FqNameUnsafe$Companion;
    constructor(arg0: string)
    constructor(arg0: string, arg1: FqName)
    constructor(arg0: string, arg1: FqNameUnsafe, arg2: Name, arg3: DefaultConstructorMarker)
    // private fqName: string;
    // private parent: FqNameUnsafe;
    readonly safe: FqName;
    // private shortName: Name;
    asString(): string;
    child(arg0: Name): FqNameUnsafe;
    // private compute(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    // private indexOfLastDotWithBackticksSupport(arg0: string): number;
    isRoot(): boolean;
    isSafe(): boolean;
    parent(): FqNameUnsafe;
    pathSegments(): Name[];
    shortName(): Name;
    shortNameOrSpecial(): Name;
    startsWith(arg0: Name): boolean;
    toSafe(): FqName;
    toString(): string;
}