import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Field } from '../../../../../../java/lang/reflect/Field.d.ts'
import type { Type } from '../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TypeUtil extends Object {
    static getAllDeclaredFields(paramcls: Class<Object>): Field[];
    static isAssignable(paramlhs: Type, paramrhs: Type): boolean;
    private constructor()
}