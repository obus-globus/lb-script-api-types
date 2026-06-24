import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Overlay } from '../../../../../net/minecraft/client/gui/screens/Overlay.d.ts'
import type { TextureManager } from '../../../../../net/minecraft/client/renderer/texture/TextureManager.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ReloadInstance } from '../../../../../net/minecraft/server/packs/resources/ReloadInstance.d.ts'
export class LoadingOverlay extends Overlay {
    static FADE_IN_TIME: number;
    static FADE_OUT_TIME: number;
    static MOJANG_STUDIOS_LOGO_LOCATION: Identifier;
    static registerTextures(paramtextureManager: TextureManager): void;
    constructor(minecraft: Minecraft, reload: ReloadInstance, onFinish: (param0: Optional<Throwable>) => void, fadeIn: boolean)
    // private currentProgress: number;
    // private fadeIn: boolean;
    // private fadeInStart: number;
    // private fadeOutStart: number;
    // private minecraft: Minecraft;
    // private onFinish: (param0: Optional<Throwable>) => void;
    // private reload: ReloadInstance;
    // private extractProgressBar(graphics: GuiGraphicsExtractor, x0: number, y0: number, x1: number, y1: number, fade: number): void;
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    // private isReadyToFadeOut(): boolean;
    tick(): void;
}