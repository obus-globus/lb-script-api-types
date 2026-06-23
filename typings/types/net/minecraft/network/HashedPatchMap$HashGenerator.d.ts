import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { TypedDataComponent } from '../../../net/minecraft/core/component/TypedDataComponent.d.ts'
export interface HashedPatchMap$HashGenerator extends Function<TypedDataComponent<Object>, number>, Object {
    andThen<V extends unknown>(arg0: (param0: number) => V): (param0: TypedDataComponent<Object>) => V;
    compose<V extends unknown>(arg0: (param0: V) => TypedDataComponent<Object>): (param0: V) => number;
}