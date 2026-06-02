import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { IMEPreeditOverlay } from '../../../../../../net/minecraft/client/gui/components/IMEPreeditOverlay.d.ts'
import type { TextFieldHelper } from '../../../../../../net/minecraft/client/gui/font/TextFieldHelper.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { CharacterEvent } from '../../../../../../net/minecraft/client/input/CharacterEvent.d.ts'
import type { KeyEvent } from '../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { PreeditEvent } from '../../../../../../net/minecraft/client/input/PreeditEvent.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { SignBlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/SignBlockEntity.d.ts'
import type { SignText } from '../../../../../../net/minecraft/world/level/block/entity/SignText.d.ts'
import type { WoodType } from '../../../../../../net/minecraft/world/level/block/state/properties/WoodType.d.ts'
import type { Vector2f } from '../../../../../../org/joml/Vector2f.d.ts'
import type { Vector3f } from '../../../../../../org/joml/Vector3f.d.ts'
export abstract class AbstractSignEditScreen extends Screen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(sign: SignBlockEntity, isFrontText: boolean, shouldFilter: boolean)
    constructor(sign: SignBlockEntity, isFrontText: boolean, shouldFilter: boolean, title: Component)
    // private cursorBlinkStartTime: number;
    // private cursorPosScratch: Vector2f;
    // private isFrontText: boolean;
    // private line: number;
    // private messages: string[];
    // private preeditOverlay: IMEPreeditOverlay;
    // private sign: SignBlockEntity;
    // private signField: TextFieldHelper;
    // private text: SignText;
    // private woodType: WoodType;
    charTyped(event: CharacterEvent): boolean;
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    // private extractSign(graphics: GuiGraphicsExtractor): void;
    extractSignBackground(graphics: GuiGraphicsExtractor): void;
    // private extractSignText(graphics: GuiGraphicsExtractor, cursorPosOutput: Vector2f): void;
    getSignTextScale(): Vector3f;
    getSignYOffset(): number;
    init(): void;
    isInGameUi(): boolean;
    isPauseScreen(): boolean;
    // private isValid(): boolean;
    keyPressed(event: KeyEvent): boolean;
    onClose(): void;
    // private onDone(): void;
    preeditUpdated(event: PreeditEvent): boolean;
    removed(): void;
    // private setMessage(message: string): void;
    tick(): void;
}