import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DataComponentExactPredicate } from '../../../../net/minecraft/core/component/DataComponentExactPredicate.d.ts'
import type { DataComponentType } from '../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { TypedDataComponent } from '../../../../net/minecraft/core/component/TypedDataComponent.d.ts'
export class DataComponentExactPredicate$Builder extends Object {
    private constructor()
    // private expectedComponents: TypedDataComponent<Object>[];
    build(): DataComponentExactPredicate;
    expect<T extends unknown>(type: DataComponentType<T>, value: T): DataComponentExactPredicate$Builder;
    expect<T extends unknown>(value: TypedDataComponent<T>): DataComponentExactPredicate$Builder;
}