import type { TypeToken } from '../../../../com/google/common/reflect/TypeToken.d.ts'
import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { App2 } from '../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { K1 } from '../../../../com/mojang/datafixers/kinds/K1.d.ts'
import type { Optic } from '../../../../com/mojang/datafixers/optics/Optic.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Optic$CompositionOptic<Proof extends K1, S extends Object | number | string | boolean, T extends Object | number | string | boolean, A extends Object | number | string | boolean, B extends Object | number | string | boolean> extends Record implements Optic<Proof, S, T, A, B> {
    constructor(optics: Optic<Proof, Object, Object, Object, Object>[])
    // private optics: Optic<Proof, Object, Object, Object, Object>[];
    equals(arg0: Object | null): boolean;
    eval(arg0: App<Proof, P>): (param0: App2<P, A, B>) => App2<P, S, T>;
    hashCode(): number;
    optics(): Optic<Proof, Object, Object, Object, Object>[];
    toString(): string;
    upCast(arg0: TypeToken<K1>[], arg1: TypeToken<Proof2>): Optional<Optic<Proof2, S, T, A, B>>;
}