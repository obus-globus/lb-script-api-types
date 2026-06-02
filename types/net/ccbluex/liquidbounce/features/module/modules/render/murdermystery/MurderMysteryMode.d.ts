import type { Mode } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { MurderMysteryMode$PlayerType } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/murdermystery/MurderMysteryMode$PlayerType.d.ts'
import type { AbstractClientPlayer } from '../../../../../../../../net/minecraft/client/player/AbstractClientPlayer.d.ts'
export class MurderMysteryMode extends Mode {
    static Companion: Tagged$Companion;
    protected constructor(name: string)
    readonly parent: ModeValueGroup<MurderMysteryMode>;
    disallowsArrowDodge(): boolean;
    getPlayerType(player: AbstractClientPlayer): MurderMysteryMode$PlayerType;
    handleHasBow(entity: AbstractClientPlayer): void;
    handleHasSword(entity: AbstractClientPlayer): void;
    reset(): void;
    shouldAttack(entity: AbstractClientPlayer): boolean;
}