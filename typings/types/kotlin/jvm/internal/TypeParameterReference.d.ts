import type { Object } from '../../../java/lang/Object.d.ts'
import type { KTypeParameterBase } from '../../../kotlin/jvm/internal/KTypeParameterBase.d.ts'
import type { TypeParameterReference$Companion } from '../../../kotlin/jvm/internal/TypeParameterReference$Companion.d.ts'
import type { KType } from '../../../kotlin/reflect/KType.d.ts'
import type { KVariance } from '../../../kotlin/reflect/KVariance.d.ts'
export class TypeParameterReference extends KTypeParameterBase {
    static Companion: TypeParameterReference$Companion;
    constructor(container: Object, name: string, variance: KVariance, isReified: boolean)
    // private bounds: KType[] | null;
    // private isReified: boolean;
    /*not mapped: */ isReified(): boolean;
    readonly name: string;
    readonly upperBounds: KType[];
    readonly variance: KVariance;
    setUpperBounds(upperBounds: KType[]): void;
}