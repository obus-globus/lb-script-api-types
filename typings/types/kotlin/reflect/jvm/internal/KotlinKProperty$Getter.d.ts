import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KParameter } from '../../../../kotlin/reflect/KParameter.d.ts'
import type { KProperty$Getter } from '../../../../kotlin/reflect/KProperty$Getter.d.ts'
import type { KType } from '../../../../kotlin/reflect/KType.d.ts'
import type { KotlinKProperty$Accessor } from '../../../../kotlin/reflect/jvm/internal/KotlinKProperty$Accessor.d.ts'
import type { Caller } from '../../../../kotlin/reflect/jvm/internal/calls/Caller.d.ts'
import type { KmPropertyAccessorAttributes } from '../../../../kotlin/reflect/jvm/internal/impl/km/KmPropertyAccessorAttributes.d.ts'
export abstract class KotlinKProperty$Getter<V extends unknown> extends KotlinKProperty$Accessor<V, V> implements KProperty$Getter<V> {
    constructor()
    readonly accessor: KmPropertyAccessorAttributes | null;
    readonly allParameters: KParameter[];
    readonly caller: Caller<any>;
    readonly name: string;
    readonly parameters: KParameter[];
    readonly returnType: KType;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}