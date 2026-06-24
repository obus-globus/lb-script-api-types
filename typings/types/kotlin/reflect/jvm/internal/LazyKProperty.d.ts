import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KParameter } from '../../../../kotlin/reflect/KParameter.d.ts'
import type { KProperty } from '../../../../kotlin/reflect/KProperty.d.ts'
import type { KType } from '../../../../kotlin/reflect/KType.d.ts'
import type { KTypeParameter } from '../../../../kotlin/reflect/KTypeParameter.d.ts'
import type { KVisibility } from '../../../../kotlin/reflect/KVisibility.d.ts'
export abstract class LazyKProperty<V extends unknown, D extends KProperty<V>> extends Object implements KProperty<V> {
    constructor(computeProperty: () => D)
    readonly annotations: Annotation[];
    readonly delegate: D;
    /*not mapped: */ isAbstract(): boolean;
    /*not mapped: */ isConst(): boolean;
    /*not mapped: */ isFinal(): boolean;
    /*not mapped: */ isLateinit(): boolean;
    /*not mapped: */ isOpen(): boolean;
    /*not mapped: */ isSuspend(): boolean;
    readonly parameters: KParameter[];
    readonly returnType: KType;
    readonly typeParameters: KTypeParameter[];
    readonly visibility: KVisibility | null;
    call(args: (Object | null)[]): V;
    callBy(args: Map<KParameter, Object | null>): V;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}