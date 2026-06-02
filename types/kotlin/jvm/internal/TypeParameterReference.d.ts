import type { Object } from '../../../java/lang/Object.d.ts'
import type { TypeParameterReference$Companion } from '../../../kotlin/jvm/internal/TypeParameterReference$Companion.d.ts'
import type { KType } from '../../../kotlin/reflect/KType.d.ts'
import type { KTypeParameter } from '../../../kotlin/reflect/KTypeParameter.d.ts'
import type { KVariance } from '../../../kotlin/reflect/KVariance.d.ts'
export class TypeParameterReference extends Object implements KTypeParameter {
    static Companion: TypeParameterReference$Companion;
    constructor(container: Object | null, name: string, variance: KVariance, isReified: boolean)
    // private bounds: KType[] | null;
    // private container: Object | null;
    // private isReified: boolean;
    /*not mapped: */ isReified(): boolean;
    readonly name: string;
    readonly upperBounds: KType[];
    readonly variance: KVariance;
    equals(other: Object | null): boolean;
    hashCode(): number;
    setUpperBounds(upperBounds: KType[]): void;
    toString(): string;
}