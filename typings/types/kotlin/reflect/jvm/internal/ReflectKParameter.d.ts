import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KParameter } from '../../../../kotlin/reflect/KParameter.d.ts'
import type { KParameter$Kind } from '../../../../kotlin/reflect/KParameter$Kind.d.ts'
import type { KType } from '../../../../kotlin/reflect/KType.d.ts'
import type { ReflectKCallable } from '../../../../kotlin/reflect/jvm/internal/ReflectKCallable.d.ts'
export abstract class ReflectKParameter extends Object implements KParameter {
    constructor()
    readonly annotations: Annotation[];
    readonly callable: ReflectKCallable<Object>;
    readonly declaresDefaultValue: boolean;
    /*not mapped: */ getIndex(): number;
    /*not mapped: */ isOptional(): boolean;
    /*not mapped: */ isVararg(): boolean;
    /*not mapped: */ getKind(): KParameter$Kind;
    /*not mapped: */ getName(): string | null;
    /*not mapped: */ getType(): KType;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}