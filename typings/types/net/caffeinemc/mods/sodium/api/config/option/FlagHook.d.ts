import type { BiConsumer } from '../../../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ConfigState } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/ConfigState.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export interface FlagHook extends BiConsumer<Identifier[], ConfigState>, Object {
    andThen(arg0: (param0: Identifier[], param1: ConfigState) => void): (param0: Identifier[], param1: ConfigState) => void;
    getTriggers(): Identifier[];
}