import type { GenericDeclaration } from '../../../../java/lang/reflect/GenericDeclaration.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Types$TypeVariableImpl<D extends GenericDeclaration> extends Object {
    constructor(genericDeclaration: D, name: string, bounds: Type[])
    readonly bounds: Type[];
    readonly genericDeclaration: D;
    readonly name: string;
    equals(obj: Object | null): boolean;
    getBounds(): Type[];
    getGenericDeclaration(): D;
    getName(): string;
    getTypeName(): string;
    hashCode(): number;
    toString(): string;
}