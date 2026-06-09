import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder$Reference } from '../../../../net/minecraft/core/Holder$Reference.d.ts'
import type { TypedDataComponent } from '../../../../net/minecraft/core/component/TypedDataComponent.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
export interface DataComponentInitializers$PendingComponents<T extends Object | number | string | boolean> extends Object {
    apply(): void;
    forEach(output: (param0: Holder$Reference<T>, param1: TypedDataComponent<Object>[]) => void): void;
    key(): ResourceKey<T[]>;
}