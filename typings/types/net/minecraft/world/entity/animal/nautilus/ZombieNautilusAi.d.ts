import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ActivityData } from '../../../../../../net/minecraft/world/entity/ai/ActivityData.d.ts'
import type { ZombieNautilus } from '../../../../../../net/minecraft/world/entity/animal/nautilus/ZombieNautilus.d.ts'
export class ZombieNautilusAi extends Object {
    static getActivities(): ActivityData<ZombieNautilus>[];
    static updateActivity(parambody: ZombieNautilus): void;
    constructor()
}