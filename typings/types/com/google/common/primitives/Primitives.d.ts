import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Primitives extends Object {
    static allPrimitiveTypes(): Class<Object>[];
    static allWrapperTypes(): Class<Object>[];
    static isWrapperType(paramtype: Class<Object>): boolean;
    static unwrap(paramtype: Class<Object>): Class<Object>;
    static wrap(paramtype: Class<Object>): Class<Object>;
    private constructor()
}