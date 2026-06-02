import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Font } from '../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class SplashRenderer extends Object {
    static CHRISTMAS: SplashRenderer;
    static HALLOWEEN: SplashRenderer;
    static NEW_YEAR: SplashRenderer;
    constructor(splash: Component)
    // private splash: Component;
    extractRenderState(graphics: GuiGraphicsExtractor, screenWidth: number, font: Font, alpha: number): void;
}