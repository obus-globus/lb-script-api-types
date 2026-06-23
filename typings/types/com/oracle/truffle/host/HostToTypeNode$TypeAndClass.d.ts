import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HostToTypeNode$TypeAndClass<T extends unknown> extends Object {
    constructor(type: Type, clazz: Class<T>)
    // private clazz: Class<T>;
    // private type: Type;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}