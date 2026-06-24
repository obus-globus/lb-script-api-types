import type { WorldTemplate } from '../../../../../com/mojang/realmsclient/dto/WorldTemplate.d.ts'
import type { RealmsSelectWorldTemplateScreen } from '../../../../../com/mojang/realmsclient/gui/screens/RealmsSelectWorldTemplateScreen.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { ImageButton } from '../../../../../net/minecraft/client/gui/components/ImageButton.d.ts'
import type { ObjectSelectionList$Entry } from '../../../../../net/minecraft/client/gui/components/ObjectSelectionList$Entry.d.ts'
import type { MouseButtonEvent } from '../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class RealmsSelectWorldTemplateScreen$Entry extends ObjectSelectionList$Entry<RealmsSelectWorldTemplateScreen$Entry> {
    static CONTENT_PADDING: number;
    constructor(null_: RealmsSelectWorldTemplateScreen, template: WorldTemplate)
    template: WorldTemplate;
    // private trailerButton: ImageButton;
    // private websiteButton: ImageButton;
    extractContent(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, hovered: boolean, a: number): void;
    getNarration(): Component;
    mouseClicked(event: MouseButtonEvent, doubleClick: boolean): boolean;
}