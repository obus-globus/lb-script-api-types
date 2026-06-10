import type { DroneControlScreen$EntityFocusData } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/aimbot/DroneControlScreen$EntityFocusData.d.ts'
import type { Rotation } from '../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { Minecraft } from '../../../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { NarratableEntry } from '../../../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { KeyEvent } from '../../../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { Component } from '../../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Vec3 } from '../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { Vector2d } from '../../../../../../../../org/joml/Vector2d.d.ts'
export class DroneControlScreen extends Screen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: NarratableEntry[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor()
    cameraPos: Vec3;
    cameraRotation: Rotation;
    // private dragStartPos: Vector2d | null;
    // private dragStartRotation: Rotation;
    // private focusedEntity: DroneControlScreen$EntityFocusData | null;
    // private zoomSteps: number;
    extractBackground(context: GuiGraphicsExtractor, mouseX: number, mouseY: number, delta: number): void;
    extractRenderState(context: GuiGraphicsExtractor, mouseX: number, mouseY: number, delta: number): void;
    getZoomFactor(): number;
    isPauseScreen(): boolean;
    keyPressed(input: KeyEvent): boolean;
    keyReleased(input: KeyEvent): boolean;
    mouseClicked(click: MouseButtonEvent, doubled: boolean): boolean;
    mouseDragged(click: MouseButtonEvent, offsetX: number, offsetY: number): boolean;
    mouseMoved(mouseX: number, mouseY: number): void;
    mouseReleased(click: MouseButtonEvent): boolean;
    mouseScrolled(mouseX: number, mouseY: number, horizontalAmount: number, verticalAmount: number): boolean;
    onClose(): void;
    shouldCloseOnEsc(): boolean;
}