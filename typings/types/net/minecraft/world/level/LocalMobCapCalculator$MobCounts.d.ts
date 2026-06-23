import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MobCategory } from '../../../../net/minecraft/world/entity/MobCategory.d.ts'
export class LocalMobCapCalculator$MobCounts extends Object {
    private constructor()
    // private counts: { [key: string]: any };
    add(category: MobCategory): void;
    canSpawn(category: MobCategory): boolean;
}