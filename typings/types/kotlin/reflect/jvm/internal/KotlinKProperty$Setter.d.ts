import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Lazy } from '../../../../kotlin/Lazy.d.ts'
import type { KMutableProperty$Setter } from '../../../../kotlin/reflect/KMutableProperty$Setter.d.ts'
import type { KParameter } from '../../../../kotlin/reflect/KParameter.d.ts'
import type { KType } from '../../../../kotlin/reflect/KType.d.ts'
import type { KotlinKProperty$Accessor } from '../../../../kotlin/reflect/jvm/internal/KotlinKProperty$Accessor.d.ts'
import type { Caller } from '../../../../kotlin/reflect/jvm/internal/calls/Caller.d.ts'
import type { KmPropertyAccessorAttributes } from '../../../../kotlin/reflect/jvm/internal/impl/km/KmPropertyAccessorAttributes.d.ts'
export abstract class KotlinKProperty$Setter<V extends unknown> extends KotlinKProperty$Accessor<V, void> implements KMutableProperty$Setter<V> {
    constructor()
    readonly accessor: KmPropertyAccessorAttributes | null;
    readonly allParameters: KParameter[];
    readonly caller: Caller<any>;
    readonly name: string;
    readonly parameters: KParameter[];
    readonly returnType: KType;
    // private setterParameter: Lazy<KParameter>;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}