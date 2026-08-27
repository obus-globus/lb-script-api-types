import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ServerboundUseItemPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundUseItemPacket.d.ts'
export class NullableBypass extends Object {
    static createWithNullHand(paramarg0: ServerboundUseItemPacket): ServerboundUseItemPacket;
    static mc(): Minecraft;
    private constructor()
}