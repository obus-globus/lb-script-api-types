import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MobCategory } from '../../../../net/minecraft/world/entity/MobCategory.d.ts'
export class LocalMobCapCalculator$MobCounts extends Object {
    private constructor()
    // private counts: Object2IntMap<MobCategory>;
    add(category: MobCategory): void;
    canSpawn(category: MobCategory): boolean;
}