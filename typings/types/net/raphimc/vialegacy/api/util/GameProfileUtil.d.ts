import type { GameProfile } from '../../../../../com/viaversion/viaversion/api/minecraft/GameProfile.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class GameProfileUtil extends Object {
    static getOfflinePlayerUuid(paramarg0: string): UUID;
    static isOfflineGameProfile(paramarg0: GameProfile): boolean;
    private constructor()
}