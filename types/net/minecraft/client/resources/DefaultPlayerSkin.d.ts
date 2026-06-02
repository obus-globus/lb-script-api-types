import type { GameProfile } from '../../../../com/mojang/authlib/GameProfile.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { PlayerSkin } from '../../../../net/minecraft/world/entity/player/PlayerSkin.d.ts'
export class DefaultPlayerSkin extends Object {
    static get(paramprofile: GameProfile): PlayerSkin;
    static get(paramprofileId: UUID): PlayerSkin;
    static getDefaultSkin(): PlayerSkin;
    static getDefaultTexture(): Identifier;
    constructor()
}