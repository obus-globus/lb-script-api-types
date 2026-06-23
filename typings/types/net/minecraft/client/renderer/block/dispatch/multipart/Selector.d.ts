import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockStateModel$Unbaked } from '../../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel$Unbaked.d.ts'
import type { Condition } from '../../../../../../../net/minecraft/client/renderer/block/dispatch/multipart/Condition.d.ts'
import type { StateDefinition } from '../../../../../../../net/minecraft/world/level/block/state/StateDefinition.d.ts'
import type { StateHolder } from '../../../../../../../net/minecraft/world/level/block/state/StateHolder.d.ts'
export class Selector extends Record {
    static CODEC: Codec<Selector>;
    constructor(condition: Optional<(param0: StateDefinition<Object, any>) => (param0: Object | null) => boolean>, variant: BlockStateModel$Unbaked)
    // private condition: Optional<(param0: StateDefinition<Object, any>) => (param0: Object | null) => boolean>;
    // private variant: BlockStateModel$Unbaked;
    condition(): Optional<(param0: StateDefinition<Object, any>) => (param0: Object | null) => boolean>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    instantiate<S extends StateHolder<O, S>, O extends Object | number | string | boolean>(definition: StateDefinition<O, S>): (param0: S) => boolean;
    toString(): string;
    variant(): BlockStateModel$Unbaked;
}