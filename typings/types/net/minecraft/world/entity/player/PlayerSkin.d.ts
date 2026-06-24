import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClientAsset$Texture } from '../../../../../net/minecraft/core/ClientAsset$Texture.d.ts'
import type { PlayerModelType } from '../../../../../net/minecraft/world/entity/player/PlayerModelType.d.ts'
import type { PlayerSkin$Patch } from '../../../../../net/minecraft/world/entity/player/PlayerSkin$Patch.d.ts'
export class PlayerSkin extends Record {
    static insecure(parambody: ClientAsset$Texture, paramcape: ClientAsset$Texture, paramelytra: ClientAsset$Texture, parammodel: PlayerModelType): PlayerSkin;
    constructor(body: ClientAsset$Texture, cape: ClientAsset$Texture, elytra: ClientAsset$Texture, model: PlayerModelType, secure: boolean)
    // private body: ClientAsset$Texture;
    // private cape: ClientAsset$Texture;
    // private elytra: ClientAsset$Texture;
    // private model: PlayerModelType;
    // private secure: boolean;
    body(): ClientAsset$Texture;
    cape(): ClientAsset$Texture;
    elytra(): ClientAsset$Texture;
    equals(o: Object | null): boolean;
    hashCode(): number;
    model(): PlayerModelType;
    secure(): boolean;
    toString(): string;
    with(patch: PlayerSkin$Patch): PlayerSkin;
}