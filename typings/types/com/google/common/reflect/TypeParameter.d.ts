import type { TypeCapture } from '../../../../com/google/common/reflect/TypeCapture.d.ts'
import type { TypeVariable } from '../../../../java/lang/reflect/TypeVariable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class TypeParameter<T extends Object | number | string | boolean> extends TypeCapture<T> {
    constructor()
    // private typeVariable: TypeVariable<Object>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}