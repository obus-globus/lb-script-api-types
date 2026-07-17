import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SectionedBlockChangeTracker } from '../../../../../../net/caffeinemc/mods/lithium/common/tracking/block/SectionedBlockChangeTracker.d.ts'
import type { SectionedEntityMovementTracker } from '../../../../../../net/caffeinemc/mods/lithium/common/tracking/entity/SectionedEntityMovementTracker.d.ts'
import type { LithiumInterner } from '../../../../../../net/caffeinemc/mods/lithium/common/util/deduplication/LithiumInterner.d.ts'
import type { GameEventDispatcherStorage } from '../../../../../../net/caffeinemc/mods/lithium/common/world/GameEventDispatcherStorage.d.ts'
import type { HolderLookup$Provider } from '../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { PathNavigation } from '../../../../../../net/minecraft/world/entity/ai/navigation/PathNavigation.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class LithiumData$Data extends Record {
    constructor(gameEventDispatchers: GameEventDispatcherStorage, ominousBanner: ItemStack, activeNavigations: PathNavigation[], blockChangeTrackers: LithiumInterner<SectionedBlockChangeTracker>, entityMovementTrackers: LithiumInterner<SectionedEntityMovementTracker<any>>, chunkSectionChangeCallbacks: JavaMap<any, any>)
    constructor(arg0: HolderLookup$Provider)
    // private activeNavigations: PathNavigation[];
    // private blockChangeTrackers: LithiumInterner<SectionedBlockChangeTracker>;
    // private chunkSectionChangeCallbacks: JavaMap<any, any>;
    // private entityMovementTrackers: LithiumInterner<SectionedEntityMovementTracker<any>>;
    // private gameEventDispatchers: GameEventDispatcherStorage;
    // private ominousBanner: ItemStack;
    activeNavigations(): PathNavigation[];
    blockChangeTrackers(): LithiumInterner<SectionedBlockChangeTracker>;
    chunkSectionChangeCallbacks(): JavaMap<any, any>;
    entityMovementTrackers(): LithiumInterner<SectionedEntityMovementTracker<any>>;
    equals(arg0: Object | null): boolean;
    gameEventDispatchers(): GameEventDispatcherStorage;
    hashCode(): number;
    ominousBanner(): ItemStack;
    toString(): string;
}