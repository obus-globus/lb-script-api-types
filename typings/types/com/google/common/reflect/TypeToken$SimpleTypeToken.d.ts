import type { TypeToken } from '../../../../com/google/common/reflect/TypeToken.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TypeToken$SimpleTypeToken<T extends unknown> extends TypeToken<T> {
    static of(paramtype: Class<Object>): TypeToken<Object>;
    static of(paramtype: Type): TypeToken<Object>;
    constructor(type: Type)
}