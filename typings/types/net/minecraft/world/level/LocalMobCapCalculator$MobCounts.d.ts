import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MobCategory } from '../../../../net/minecraft/world/entity/MobCategory.d.ts'
export class LocalMobCapCalculator$MobCounts extends Object {
    private constructor()
    // private counts: JavaMap<any, any>;
    add(category: MobCategory): void;
    canSpawn(category: MobCategory): boolean;
}