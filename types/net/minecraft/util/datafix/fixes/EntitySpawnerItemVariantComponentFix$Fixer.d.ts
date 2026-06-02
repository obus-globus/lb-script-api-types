import type { Typed } from '../../../../../com/mojang/datafixers/Typed.d.ts'
import type { Dynamic } from '../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface EntitySpawnerItemVariantComponentFix$Fixer extends Function<Typed<Object>, Typed<Object>>, Object{
    andThen(arg0: (param0: R) => V): (param0: T) => V;
    apply(components: Typed<Object>): Typed<Object>;
    compose(arg0: (param0: V) => T): (param0: V) => R;
    fixRemainder(remainder: Dynamic<T>): Dynamic<T>;
    fixRemainder(remainder: Dynamic<T>, bucketData: Dynamic<T>): Dynamic<T>;
}