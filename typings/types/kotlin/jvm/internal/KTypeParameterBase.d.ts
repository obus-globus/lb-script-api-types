import type { GenericDeclaration } from '../../../java/lang/reflect/GenericDeclaration.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { KTypeParameter } from '../../../kotlin/reflect/KTypeParameter.d.ts'
export abstract class KTypeParameterBase extends Object implements KTypeParameter {
    constructor(container: Object)
    // private container: Object;
    /*not mapped: */ getContainer$kotlin_stdlib(): Object;
    // private javaContainingDeclaration: GenericDeclaration | null;
    /*not mapped: */ getJavaContainingDeclaration$kotlin_stdlib(): GenericDeclaration | null;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}