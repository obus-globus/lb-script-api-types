import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Font } from '../../../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { ClientTooltipComponent } from '../../../../../../../net/minecraft/client/gui/screens/inventory/tooltip/ClientTooltipComponent.d.ts'
import type { ItemStackTemplate } from '../../../../../../../net/minecraft/world/item/ItemStackTemplate.d.ts'
import type { BundleContents } from '../../../../../../../net/minecraft/world/item/component/BundleContents.d.ts'
import type { Fraction } from '../../../../../../../org/apache/commons/lang3/math/Fraction.d.ts'
export class ClientBundleTooltip extends Object implements ClientTooltipComponent {
    constructor(contents: BundleContents)
    // private contents: BundleContents;
    // private backgroundHeight(): number;
    // private extractBundleWithItemsTooltip(font: Font, x: number, y: number, w: number, h: number, graphics: GuiGraphicsExtractor, weight: Fraction): void;
    extractImage(font: Font, x: number, y: number, w: number, h: number, graphics: GuiGraphicsExtractor): void;
    // private extractSelectedItemTooltip(font: Font, graphics: GuiGraphicsExtractor, x: number, y: number, w: number): void;
    // private extractSlot(slotNumber: number, drawX: number, drawY: number, shownItems: ItemStackTemplate[], slotIndex: number, font: Font, graphics: GuiGraphicsExtractor): void;
    extractText(graphics: GuiGraphicsExtractor, font: Font, x: number, y: number): void;
    // private getAmountOfHiddenItems(shownItems: ItemStackTemplate[]): number;
    getHeight(font: Font): number;
    // private getShownItems(amountOfItemsToShow: number): ItemStackTemplate[];
    getWidth(font: Font): number;
    // private gridSizeY(): number;
    // private itemGridHeight(): number;
    showTooltipWithItemInHand(): boolean;
    // private slotCount(): number;
}