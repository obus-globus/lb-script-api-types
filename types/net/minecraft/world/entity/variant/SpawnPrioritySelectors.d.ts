import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PriorityProvider$Selector } from '../../../../../net/minecraft/world/entity/variant/PriorityProvider$Selector.d.ts'
import type { SpawnCondition } from '../../../../../net/minecraft/world/entity/variant/SpawnCondition.d.ts'
import type { SpawnContext } from '../../../../../net/minecraft/world/entity/variant/SpawnContext.d.ts'
export class SpawnPrioritySelectors extends Record {
    static CODEC: Codec<SpawnPrioritySelectors>;
    static EMPTY: SpawnPrioritySelectors;
    static fallback(parampriority: number): SpawnPrioritySelectors;
    static single(paramcondition: SpawnCondition, parampriority: number): SpawnPrioritySelectors;
    constructor(selectors: PriorityProvider$Selector<SpawnContext, SpawnCondition>[])
    // private selectors: PriorityProvider$Selector<SpawnContext, SpawnCondition>[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    selectors(): PriorityProvider$Selector<SpawnContext, SpawnCondition>[];
    toString(): string;
}