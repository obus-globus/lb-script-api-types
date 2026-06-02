import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { Hoglin } from '../../../../../../net/minecraft/world/entity/monster/hoglin/Hoglin.d.ts'
export class HoglinAi extends Object {
    static REPELLENT_DETECTION_RANGE_HORIZONTAL: number;
    static REPELLENT_DETECTION_RANGE_VERTICAL: number;
    static getSoundForCurrentActivity(parambody: Hoglin): Optional<SoundEvent>;
    constructor()
}