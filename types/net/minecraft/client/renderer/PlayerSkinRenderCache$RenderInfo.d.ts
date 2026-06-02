import type { GameProfile } from '../../../../com/mojang/authlib/GameProfile.d.ts'
import type { GpuTextureView } from '../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GlyphRenderTypes } from '../../../../net/minecraft/client/gui/font/GlyphRenderTypes.d.ts'
import type { RenderType } from '../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { PlayerSkin } from '../../../../net/minecraft/world/entity/player/PlayerSkin.d.ts'
import type { PlayerSkin$Patch } from '../../../../net/minecraft/world/entity/player/PlayerSkin$Patch.d.ts'
export class PlayerSkinRenderCache$RenderInfo extends Object {
    constructor(null_: PlayerSkinRenderCache$RenderInfo, gameProfile: GameProfile, playerSkin: PlayerSkin, patch: PlayerSkin$Patch)
    // private gameProfile: GameProfile;
    // private glyphRenderTypes: GlyphRenderTypes;
    // private itemRenderType: RenderType;
    // private playerSkin: PlayerSkin;
    // private textureView: GpuTextureView;
    equals(o: Object | null): boolean;
    gameProfile(): GameProfile;
    glyphRenderTypes(): GlyphRenderTypes;
    hashCode(): number;
    playerSkin(): PlayerSkin;
    renderType(): RenderType;
    textureView(): GpuTextureView;
}