import type { Class } from '../../../java/lang/Class.d.ts'
import type { Type } from '../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class TypeLiteral<T extends unknown> extends Object {
    constructor()
    readonly rawType: Class<T>;
    readonly type: Type;
    equals(obj: Object | null): boolean;
    getRawType(): Class<T>;
    getType(): Type;
    hashCode(): number;
    toString(): string;
}