import type { Either } from '../../../../../com/mojang/datafixers/util/Either.d.ts'
import type { RealmsClient } from '../../../../../com/mojang/realmsclient/client/RealmsClient.d.ts'
import type { RealmsServer$WorldType } from '../../../../../com/mojang/realmsclient/dto/RealmsServer$WorldType.d.ts'
import type { WorldTemplate } from '../../../../../com/mojang/realmsclient/dto/WorldTemplate.d.ts'
import type { WorldTemplatePaginatedList } from '../../../../../com/mojang/realmsclient/dto/WorldTemplatePaginatedList.d.ts'
import type { RealmsSelectWorldTemplateScreen$WorldTemplateList } from '../../../../../com/mojang/realmsclient/gui/screens/RealmsSelectWorldTemplateScreen$WorldTemplateList.d.ts'
import type { TextRenderingUtils$Line } from '../../../../../com/mojang/realmsclient/util/TextRenderingUtils$Line.d.ts'
import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Button } from '../../../../../net/minecraft/client/gui/components/Button.d.ts'
import type { HeaderAndFooterLayout } from '../../../../../net/minecraft/client/gui/layouts/HeaderAndFooterLayout.d.ts'
import type { NarratableEntry } from '../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { RealmsScreen } from '../../../../../net/minecraft/realms/RealmsScreen.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class RealmsSelectWorldTemplateScreen extends RealmsScreen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(title: Component, callback: (param0: WorldTemplate) => void, worldType: RealmsServer$WorldType, alreadyFetched: WorldTemplatePaginatedList)
    constructor(title: Component, callback: (param0: WorldTemplate) => void, worldType: RealmsServer$WorldType, alreadyFetched: WorldTemplatePaginatedList, subtitle: Component[])
    // private callback: (param0: WorldTemplate) => void;
    // private currentLink: string;
    // private layout: HeaderAndFooterLayout;
    // private noTemplatesMessage: TextRenderingUtils$Line[];
    // private publisherButton: Button;
    // private selectButton: Button;
    // private selectedTemplate: WorldTemplate;
    // private subtitle: Component[];
    // private trailerButton: Button;
    // private worldTemplateList: RealmsSelectWorldTemplateScreen$WorldTemplateList;
    // private worldType: RealmsServer$WorldType;
    // private extractMultilineMessage(graphics: GuiGraphicsExtractor, xm: number, ym: number, noTemplatesMessage: TextRenderingUtils$Line[]): void;
    extractRenderState(graphics: GuiGraphicsExtractor, xm: number, ym: number, a: number): void;
    // private fetchTemplates(paginatedList: WorldTemplatePaginatedList, client: RealmsClient): Either<WorldTemplatePaginatedList, Exception>;
    // private fetchTemplatesAsync(startPage: WorldTemplatePaginatedList): void;
    getNarrationMessage(): Component;
    init(): void;
    onClose(): void;
    // private onPublish(): void;
    // private onTrailer(): void;
    repositionElements(): void;
    // private selectTemplate(): void;
    // private updateButtonStates(): void;
}