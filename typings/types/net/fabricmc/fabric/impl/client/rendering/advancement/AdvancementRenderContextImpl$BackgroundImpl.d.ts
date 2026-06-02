import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AdvancementRenderContext$Background } from '../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/advancement/AdvancementRenderContext$Background.d.ts'
import type { AdvancementHolder } from '../../../../../../../net/minecraft/advancements/AdvancementHolder.d.ts'
import type { AdvancementProgress } from '../../../../../../../net/minecraft/advancements/AdvancementProgress.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { ScreenRectangle } from '../../../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
export class AdvancementRenderContextImpl$BackgroundImpl extends Record implements AdvancementRenderContext$Background {
    // private bounds: ScreenRectangle;
    // private graphics: GuiGraphicsExtractor;
    // private holder: AdvancementHolder;
    // private progress: AdvancementProgress;
    // private scrollX: number;
    // private scrollY: number;
    bounds(): ScreenRectangle;
    equals(arg0: Object | null): boolean;
    graphics(): GuiGraphicsExtractor;
    hashCode(): number;
    holder(): AdvancementHolder;
    progress(): AdvancementProgress;
    scrollX(): number;
    scrollY(): number;
    toString(): string;
}