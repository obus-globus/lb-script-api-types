import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Type } from '../../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class TypeToken<T extends Object | number | string | boolean> extends Object {
    static get(paramarg0: Class<Object>): TypeToken<Object>;
    static get(paramarg0: Type): TypeToken<Object>;
    constructor()
    constructor(arg0: Type)
    // private hashCode: number;
    readonly rawType: Class<T>;
    readonly type: Type;
    equals(arg0: Object | null): boolean;
    getRawType(): Class<T>;
    getType(): Type;
    hashCode(): number;
    toString(): string;
}