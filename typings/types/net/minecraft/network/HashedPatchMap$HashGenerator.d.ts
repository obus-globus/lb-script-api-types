import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { TypedDataComponent } from '../../../net/minecraft/core/component/TypedDataComponent.d.ts'
export interface HashedPatchMap$HashGenerator extends Function<TypedDataComponent<Object>, number>, Object {
    andThen(arg0: (param0: R) => V): (param0: T) => V;
    compose(arg0: (param0: V) => T): (param0: V) => R;
}