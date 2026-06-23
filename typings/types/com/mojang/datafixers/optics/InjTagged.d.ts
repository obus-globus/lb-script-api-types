import type { FunctionType } from '../../../../com/mojang/datafixers/FunctionType.d.ts'
import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { App2 } from '../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { K2 } from '../../../../com/mojang/datafixers/kinds/K2.d.ts'
import type { Prism } from '../../../../com/mojang/datafixers/optics/Prism.d.ts'
import type { Prism$Mu } from '../../../../com/mojang/datafixers/optics/Prism$Mu.d.ts'
import type { Cocartesian$Mu } from '../../../../com/mojang/datafixers/optics/profunctors/Cocartesian$Mu.d.ts'
import type { Either } from '../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Pair } from '../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class InjTagged<K extends unknown, A extends unknown, B extends unknown> extends Object implements Prism<Pair<K, Object>, Pair<K, Object>, A, B> {
    static unbox(paramarg0: App2<Prism$Mu<Object, Object>, Object, Object>): Prism<Object, Object, Object, Object>;
    constructor(arg0: K)
    // private key: K;
    build(arg0: B): Pair<K, Object>;
    equals(arg0: Object | null): boolean;
    eval<P extends K2>(arg0: App<Cocartesian$Mu, P>): FunctionType<App2<P, A, B>, App2<P, Pair<K, Object>, Pair<K, Object>>>;
    hashCode(): number;
    match(arg0: Pair<K, Object>): Either<Pair<K, Object>, A>;
    toString(): string;
}