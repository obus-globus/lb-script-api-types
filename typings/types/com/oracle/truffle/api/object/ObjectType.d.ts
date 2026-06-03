import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectType extends Object {
    constructor()
    dispatch(): Class<Object>;
    equals(object: DynamicObject, other: Object): boolean;
    equals(other: Object | null): boolean;
    hashCode(): number;
    hashCode(object: DynamicObject): number;
    toString(): string;
    toString(object: DynamicObject): string;
}