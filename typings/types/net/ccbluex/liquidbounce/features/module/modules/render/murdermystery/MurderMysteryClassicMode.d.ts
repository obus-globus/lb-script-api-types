import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { UuidBasedMurderMysteryMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/murdermystery/UuidBasedMurderMysteryMode.d.ts'
import type { AbstractClientPlayer } from '../../../../../../../../net/minecraft/client/player/AbstractClientPlayer.d.ts'
export class MurderMysteryClassicMode extends UuidBasedMurderMysteryMode {
    static Companion: Tagged$Companion;
    static INSTANCE: MurderMysteryClassicMode;
    handleHasSword(entity: AbstractClientPlayer): void;
}