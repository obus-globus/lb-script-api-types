import type { BiConsumer } from '../../../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ConfigState } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/ConfigState.d.ts'
export interface FlagHook extends BiConsumer<E[], ConfigState>, Object{
    andThen(arg0: (param0: T, param1: U) => void): (param0: T, param1: U) => void;
    getTriggers(): E[];
}