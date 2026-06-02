import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { AbstractContainerMenu } from '../../../../../../net/minecraft/world/inventory/AbstractContainerMenu.d.ts'
import type { Slot } from '../../../../../../net/minecraft/world/inventory/Slot.d.ts'
export class CyclingSlotBackground extends Object {
    constructor(slotIndex: number)
    // private iconIndex: number;
    // private icons: Identifier[];
    // private slotIndex: number;
    // private tick: number;
    // private extractIcon(slot: Slot, iconIdentifier: Identifier, alphaProgress: number, graphics: GuiGraphicsExtractor, left: number, top: number): void;
    extractRenderState(menu: AbstractContainerMenu, graphics: GuiGraphicsExtractor, a: number, left: number, top: number): void;
    // private getIconTransitionTransparency(a: number): number;
    tick(newIcons: Identifier[]): void;
}