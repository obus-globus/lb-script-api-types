import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { TypeReference$Companion } from '../../../kotlin/jvm/internal/TypeReference$Companion.d.ts'
import type { KClassifier } from '../../../kotlin/reflect/KClassifier.d.ts'
import type { KType } from '../../../kotlin/reflect/KType.d.ts'
import type { KTypeProjection } from '../../../kotlin/reflect/KTypeProjection.d.ts'
export class TypeReference extends Object implements KType {
    static Companion: TypeReference$Companion;
    static IS_MARKED_NULLABLE: number;
    static IS_MUTABLE_COLLECTION_TYPE: number;
    static IS_NOTHING_TYPE: number;
    constructor(classifier: KClassifier, arguments: KTypeProjection[], isMarkedNullable: boolean)
    constructor(classifier: KClassifier, arguments: KTypeProjection[], platformTypeUpperBound: KType | null, flags: number)
    readonly annotations: Annotation[];
    readonly arguments: KTypeProjection[];
    readonly classifier: KClassifier;
    // private flags: number;
    /*not mapped: */ getFlags$kotlin_stdlib(): number;
    /*not mapped: */ isMarkedNullable(): boolean;
    // private platformTypeUpperBound: KType | null;
    /*not mapped: */ getPlatformTypeUpperBound$kotlin_stdlib(): KType | null;
    // private asString(convertPrimitiveToWrapper: boolean): string;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}