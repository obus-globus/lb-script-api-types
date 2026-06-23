import type { Type } from '../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Typed } from '../../../../../org/apache/commons/lang3/reflect/Typed.d.ts'
export abstract class TypeLiteral<T extends unknown> extends Object implements Typed<T> {
    constructor()
    // private toString: string;
    value: Type;
    equals(arg0: Object | null): boolean;
    getType(): Type;
    hashCode(): number;
    toString(): string;
}