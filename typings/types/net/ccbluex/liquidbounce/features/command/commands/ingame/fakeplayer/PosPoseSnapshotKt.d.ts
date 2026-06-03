import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { PosPoseSnapshot } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/commands/ingame/fakeplayer/PosPoseSnapshot.d.ts'
import type { AbstractClientPlayer } from '../../../../../../../../net/minecraft/client/player/AbstractClientPlayer.d.ts'
export class PosPoseSnapshotKt extends Object {
    static fromPlayer(entity: AbstractClientPlayer): PosPoseSnapshot;
    static fromPlayerMotion(entity: AbstractClientPlayer): PosPoseSnapshot;
}