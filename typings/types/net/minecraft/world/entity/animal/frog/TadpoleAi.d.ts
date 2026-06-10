import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ActivityData } from '../../../../../../net/minecraft/world/entity/ai/ActivityData.d.ts'
import type { Tadpole } from '../../../../../../net/minecraft/world/entity/animal/frog/Tadpole.d.ts'
export class TadpoleAi extends Object {
    static getActivities(): ActivityData<Tadpole>[];
    static updateActivity(parambody: Tadpole): void;
    constructor()
}