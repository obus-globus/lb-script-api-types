import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { PlayerSkin } from '../../../../../net/minecraft/world/entity/player/PlayerSkin.d.ts'
import type { ResolvableProfile } from '../../../../../net/minecraft/world/item/component/ResolvableProfile.d.ts'
export class PlayerFaceExtractor extends Object {
    static SKIN_HAT_HEIGHT: number;
    static SKIN_HAT_U: number;
    static SKIN_HAT_V: number;
    static SKIN_HAT_WIDTH: number;
    static SKIN_HEAD_HEIGHT: number;
    static SKIN_HEAD_U: number;
    static SKIN_HEAD_V: number;
    static SKIN_HEAD_WIDTH: number;
    static SKIN_TEX_HEIGHT: number;
    static SKIN_TEX_WIDTH: number;
    static extractRenderState(paramgraphics: GuiGraphicsExtractor, paramtexture: Identifier, paramx: number, paramy: number, paramsize: number, paramhat: boolean, paramflip: boolean, paramcolor: number): void;
    static extractRenderState(paramgraphics: GuiGraphicsExtractor, paramskin: PlayerSkin, paramx: number, paramy: number, paramsize: number): void;
    static extractRenderState(paramgraphics: GuiGraphicsExtractor, paramskin: PlayerSkin, paramx: number, paramy: number, paramsize: number, paramcolor: number): void;
    static extractRenderState(paramgraphics: GuiGraphicsExtractor, paramskinProfile: ResolvableProfile, paramx: number, paramy: number, paramsize: number): void;
    constructor()
}