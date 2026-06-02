import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MultiVariant } from '../../../../../../net/minecraft/client/data/models/MultiVariant.d.ts'
import type { Condition } from '../../../../../../net/minecraft/client/renderer/block/dispatch/multipart/Condition.d.ts'
import type { Selector } from '../../../../../../net/minecraft/client/renderer/block/dispatch/multipart/Selector.d.ts'
import type { StateDefinition } from '../../../../../../net/minecraft/world/level/block/state/StateDefinition.d.ts'
export class MultiPartGenerator$Entry extends Record {
    private constructor(condition: Optional<(param0: StateDefinition<Object, Object>) => java.util.function.Predicate<unknown>>, variants: MultiVariant)
    // private condition: Optional<(param0: StateDefinition<Object, Object>) => java.util.function.Predicate<unknown>>;
    // private variants: MultiVariant;
    condition(): Optional<(param0: StateDefinition<Object, Object>) => java.util.function.Predicate<unknown>>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    toUnbaked(): Selector;
    variants(): MultiVariant;
}