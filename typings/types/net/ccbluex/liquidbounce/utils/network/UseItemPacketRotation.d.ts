import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ServerboundUseItemPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundUseItemPacket.d.ts'
import type { InteractionHand } from '../../../../../net/minecraft/world/InteractionHand.d.ts'
export class UseItemPacketRotation extends Object {
    static createExplicit(paramarg0: InteractionHand, paramarg1: number, paramarg2: number, paramarg3: number): ServerboundUseItemPacket;
    static shouldOverride(): boolean;
    private constructor()
}