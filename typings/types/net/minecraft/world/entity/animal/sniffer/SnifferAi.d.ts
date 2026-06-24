import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ActivityData } from '../../../../../../net/minecraft/world/entity/ai/ActivityData.d.ts'
import type { Sniffer } from '../../../../../../net/minecraft/world/entity/animal/sniffer/Sniffer.d.ts'
export class SnifferAi extends Object {
    static getActivities(): ActivityData<Sniffer>[];
    static updateActivity(parambody: Sniffer): void;
    constructor()
}