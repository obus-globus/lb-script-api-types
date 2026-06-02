import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { AdvancementRenderContext } from '../../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/advancement/AdvancementRenderContext.d.ts'
import type { Advancement } from '../../../../../../../../net/minecraft/advancements/Advancement.d.ts'
import type { DisplayInfo } from '../../../../../../../../net/minecraft/advancements/DisplayInfo.d.ts'
export interface AdvancementRenderContext$Frame extends Object, AdvancementRenderContext{
    advancement(): Advancement;
    display(): DisplayInfo;
    isHovered(): boolean;
    isObtained(): boolean;
    x(): number;
    y(): number;
}