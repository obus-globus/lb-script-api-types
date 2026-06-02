import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { Color4b } from '../../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
export class NametagEquipment$HighlightItemInUse extends ToggleableValueGroup {
    static INSTANCE: NametagEquipment$HighlightItemInUse;
    // private fillColor: Color4b;
    // private /*not mapped: */ getFillColor(): Color4b;
    // private outlineColor: Color4b;
    // private /*not mapped: */ getOutlineColor(): Color4b;
    draw(guiGraphics: GuiGraphicsExtractor, x: number, y: number): void;
}