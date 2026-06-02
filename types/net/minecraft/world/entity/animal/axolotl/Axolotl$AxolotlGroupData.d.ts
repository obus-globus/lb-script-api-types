import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { AgeableMob$AgeableMobGroupData } from '../../../../../../net/minecraft/world/entity/AgeableMob$AgeableMobGroupData.d.ts'
import type { Axolotl$Variant } from '../../../../../../net/minecraft/world/entity/animal/axolotl/Axolotl$Variant.d.ts'
export class Axolotl$AxolotlGroupData extends AgeableMob$AgeableMobGroupData {
    constructor(types: Axolotl$Variant[])
    types: Axolotl$Variant[];
    getVariant(random: RandomSource): Axolotl$Variant;
}