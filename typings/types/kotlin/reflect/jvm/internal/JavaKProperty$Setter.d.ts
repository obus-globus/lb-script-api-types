import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Lazy } from '../../../../kotlin/Lazy.d.ts'
import type { KMutableProperty$Setter } from '../../../../kotlin/reflect/KMutableProperty$Setter.d.ts'
import type { KParameter } from '../../../../kotlin/reflect/KParameter.d.ts'
import type { KType } from '../../../../kotlin/reflect/KType.d.ts'
import type { JavaKProperty$Accessor } from '../../../../kotlin/reflect/jvm/internal/JavaKProperty$Accessor.d.ts'
import type { Caller } from '../../../../kotlin/reflect/jvm/internal/calls/Caller.d.ts'
export abstract class JavaKProperty$Setter<V extends unknown> extends JavaKProperty$Accessor<V, void> implements KMutableProperty$Setter<V> {
    constructor()
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