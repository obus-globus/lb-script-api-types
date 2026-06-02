import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AdvancementRenderContext$Frame } from '../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/advancement/AdvancementRenderContext$Frame.d.ts'
import type { AdvancementHolder } from '../../../../../../../net/minecraft/advancements/AdvancementHolder.d.ts'
import type { AdvancementProgress } from '../../../../../../../net/minecraft/advancements/AdvancementProgress.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
export class AdvancementRenderContextImpl$FrameImpl extends Record implements AdvancementRenderContext$Frame {
    // private graphics: GuiGraphicsExtractor;
    // private holder: AdvancementHolder;
    // private isHovered: boolean;
    // private progress: AdvancementProgress;
    // private x: number;
    // private y: number;
    equals(arg0: Object | null): boolean;
    graphics(): GuiGraphicsExtractor;
    hashCode(): number;
    holder(): AdvancementHolder;
    isHovered(): boolean;
    progress(): AdvancementProgress;
    toString(): string;
    x(): number;
    y(): number;
}