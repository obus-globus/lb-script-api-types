import type { EntityTypes1_8$EntityType } from '../../../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityTypes1_8$EntityType.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { SoundType } from '../../../../../../../../net/raphimc/vialegacy/protocol/release/r1_2_4_5tor1_3_1_2/data/sound/SoundType.d.ts'
import type { ConfiguredSound } from '../../../../../../../../net/raphimc/vialegacy/protocol/release/r1_2_4_5tor1_3_1_2/model/ConfiguredSound.d.ts'
export class SoundRegistry1_2_4 extends Object {
    static getEntitySound(paramarg0: EntityTypes1_8$EntityType, paramarg1: SoundType): ConfiguredSound;
    static getSoundDelayTime(paramarg0: EntityTypes1_8$EntityType): number;
    constructor()
}