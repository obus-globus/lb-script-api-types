import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Font } from '../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class GuiUtil extends Object {
    static IRIS_WIDGETS_TEX: Identifier;
    static bindIrisWidgetsTexture(): void;
    static drawButton(paramarg0: GuiGraphicsExtractor, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: boolean, paramarg6: boolean): void;
    static drawPanel(paramarg0: GuiGraphicsExtractor, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static drawTextPanel(paramarg0: Font, paramarg1: GuiGraphicsExtractor, paramarg2: Component, paramarg3: number, paramarg4: number): void;
    static playButtonClickSound(): void;
    static shortenText(paramarg0: Font, paramarg1: MutableComponent, paramarg2: number): MutableComponent;
    static translateOrDefault(paramarg0: MutableComponent, paramarg1: string, ...paramarg2: (Object | null)[]): MutableComponent;
    private constructor()
}