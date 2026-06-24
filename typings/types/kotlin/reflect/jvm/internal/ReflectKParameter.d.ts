import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KParameter } from '../../../../kotlin/reflect/KParameter.d.ts'
import type { ReflectKCallable } from '../../../../kotlin/reflect/jvm/internal/ReflectKCallable.d.ts'
export abstract class ReflectKParameter extends Object implements KParameter {
    constructor()
    readonly annotations: Annotation[];
    readonly callable: ReflectKCallable<Object>;
    readonly declaresDefaultValue: boolean;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}