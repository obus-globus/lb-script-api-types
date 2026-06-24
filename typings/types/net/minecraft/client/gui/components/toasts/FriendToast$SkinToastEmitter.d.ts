import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
export interface FriendToast$SkinToastEmitter extends Object{
    emit(minecraft: Minecraft, playerName: string, playerId: UUID): void;
}