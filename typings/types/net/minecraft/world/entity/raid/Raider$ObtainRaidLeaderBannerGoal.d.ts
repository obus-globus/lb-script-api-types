import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Goal } from '../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { ItemEntity } from '../../../../../net/minecraft/world/entity/item/ItemEntity.d.ts'
import type { Raider } from '../../../../../net/minecraft/world/entity/raid/Raider.d.ts'
import type { Path } from '../../../../../net/minecraft/world/level/pathfinder/Path.d.ts'
export class Raider$ObtainRaidLeaderBannerGoal<T extends Raider> extends Goal {
    constructor(null_: Raider, mob: T)
    // private mob: T;
    // private pathToBanner: Path;
    // private pursuedBannerItemEntity: ItemEntity;
    // private unreachableBannerCache: JavaMap<any, any>;
    canContinueToUse(): boolean;
    canUse(): boolean;
    // private cannotPickUpBanner(): boolean;
    start(): void;
    stop(): void;
    tick(): void;
}