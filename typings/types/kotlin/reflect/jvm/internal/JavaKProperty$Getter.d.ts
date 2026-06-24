import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KParameter } from '../../../../kotlin/reflect/KParameter.d.ts'
import type { KProperty$Getter } from '../../../../kotlin/reflect/KProperty$Getter.d.ts'
import type { KType } from '../../../../kotlin/reflect/KType.d.ts'
import type { JavaKProperty$Accessor } from '../../../../kotlin/reflect/jvm/internal/JavaKProperty$Accessor.d.ts'
import type { Caller } from '../../../../kotlin/reflect/jvm/internal/calls/Caller.d.ts'
export abstract class JavaKProperty$Getter<V extends unknown> extends JavaKProperty$Accessor<V, V> implements KProperty$Getter<V> {
    constructor()
    readonly allParameters: KParameter[];
    readonly caller: Caller<any>;
    readonly name: string;
    readonly parameters: KParameter[];
    readonly returnType: KType;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}