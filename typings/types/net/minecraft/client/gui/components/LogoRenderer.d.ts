import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class LogoRenderer extends Object {
    static DEFAULT_HEIGHT_OFFSET: number;
    static EASTER_EGG_LOGO: Identifier;
    static LOGO_HEIGHT: number;
    static LOGO_WIDTH: number;
    static MINECRAFT_EDITION: Identifier;
    static MINECRAFT_LOGO: Identifier;
    constructor(keepLogoThroughFade: boolean)
    // private keepLogoThroughFade: boolean;
    // private showEasterEgg: boolean;
    extractRenderState(graphics: GuiGraphicsExtractor, width: number, alpha: number): void;
    extractRenderState(graphics: GuiGraphicsExtractor, width: number, alpha: number, heightOffset: number): void;
    keepLogoThroughFade(): boolean;
}