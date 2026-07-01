import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FqName$Companion } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName$Companion.d.ts'
import type { FqNameUnsafe } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/FqNameUnsafe.d.ts'
import type { Name } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export class FqName extends Object {
    static Companion: FqName$Companion;
    static ROOT: FqName;
    constructor(arg0: string)
    constructor(arg0: FqNameUnsafe)
    // private fqName: FqNameUnsafe;
    // private parent: FqName;
    asString(): string;
    child(arg0: Name): FqName;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    isRoot(): boolean;
    parent(): FqName;
    pathSegments(): Name[];
    shortName(): Name;
    shortNameOrSpecial(): Name;
    startsWith(arg0: Name): boolean;
    toString(): string;
    toUnsafe(): FqNameUnsafe;
}