import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Advancement } from '../../../../../../../../net/minecraft/advancements/Advancement.d.ts'
import type { AdvancementHolder } from '../../../../../../../../net/minecraft/advancements/AdvancementHolder.d.ts'
import type { AdvancementProgress } from '../../../../../../../../net/minecraft/advancements/AdvancementProgress.d.ts'
import type { DisplayInfo } from '../../../../../../../../net/minecraft/advancements/DisplayInfo.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
export interface AdvancementRenderContext extends Object{
    advancement(): Advancement;
    display(): DisplayInfo;
    graphics(): GuiGraphicsExtractor;
    holder(): AdvancementHolder;
    isObtained(): boolean;
    progress(): AdvancementProgress;
}