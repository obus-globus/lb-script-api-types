import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AdvancementRenderContext$Icon } from '../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/advancement/AdvancementRenderContext$Icon.d.ts'
import type { AdvancementHolder } from '../../../../../../../net/minecraft/advancements/AdvancementHolder.d.ts'
import type { AdvancementProgress } from '../../../../../../../net/minecraft/advancements/AdvancementProgress.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
export class AdvancementRenderContextImpl$IconImpl extends Object implements AdvancementRenderContext$Icon {
    constructor(arg0: GuiGraphicsExtractor, arg1: AdvancementHolder, arg2: AdvancementProgress, arg3: boolean, arg4: boolean)
    constructor(arg0: GuiGraphicsExtractor, arg1: AdvancementHolder, arg2: AdvancementProgress, arg3: number, arg4: number, arg5: boolean, arg6: boolean)
    // private graphics: GuiGraphicsExtractor;
    // private holder: AdvancementHolder;
    readonly hovered: boolean;
    // private progress: AdvancementProgress;
    readonly selected: boolean;
    // private x: number;
    // private y: number;
    graphics(): GuiGraphicsExtractor;
    holder(): AdvancementHolder;
    isHovered(): boolean;
    isSelected(): boolean;
    progress(): AdvancementProgress;
    setPos(arg0: number, arg1: number): void;
    x(): number;
    y(): number;
}