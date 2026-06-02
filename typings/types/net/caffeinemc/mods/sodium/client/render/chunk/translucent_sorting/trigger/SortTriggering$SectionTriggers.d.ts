import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { DynamicData } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/DynamicData.d.ts'
import type { TranslucentData } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/TranslucentData.d.ts'
import type { CameraMovement } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/trigger/CameraMovement.d.ts'
import type { SortTriggering } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/trigger/SortTriggering.d.ts'
import type { SectionPos } from '../../../../../../../../../net/minecraft/core/SectionPos.d.ts'
export interface SortTriggering$SectionTriggers<T extends DynamicData> extends Object{
    integrateSection(arg0: SortTriggering, arg1: SectionPos, arg2: T, arg3: CameraMovement): void;
    processTriggers(arg0: SortTriggering, arg1: CameraMovement): void;
    removeSection(arg0: number, arg1: TranslucentData): void;
}