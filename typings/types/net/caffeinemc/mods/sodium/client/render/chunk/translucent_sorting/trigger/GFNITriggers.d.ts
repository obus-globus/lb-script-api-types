import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { DynamicData } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/DynamicData.d.ts'
import type { TranslucentData } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/TranslucentData.d.ts'
import type { CameraMovement } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/trigger/CameraMovement.d.ts'
import type { NormalList } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/trigger/NormalList.d.ts'
import type { NormalPlanes } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/trigger/NormalPlanes.d.ts'
import type { SortTriggering } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/trigger/SortTriggering.d.ts'
import type { SortTriggering$SectionTriggers } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/trigger/SortTriggering$SectionTriggers.d.ts'
import type { SectionPos } from '../../../../../../../../../net/minecraft/core/SectionPos.d.ts'
import type { Vector3fc } from '../../../../../../../../../org/joml/Vector3fc.d.ts'
export class GFNITriggers extends Object implements SortTriggering$SectionTriggers<DynamicData> {
    constructor()
    // private normalLists: Map<Vector3fc, NormalList>;
    // private addSectionInNewNormalLists(arg0: NormalPlanes): void;
    getUniqueNormalCount(): number;
    integrateSection(arg0: SortTriggering, arg1: SectionPos, arg2: DynamicData, arg3: CameraMovement): void;
    processTriggers(arg0: SortTriggering, arg1: CameraMovement): void;
    removeSection(arg0: number, arg1: TranslucentData): void;
    // private removeSectionFromList(arg0: NormalList, arg1: number): boolean;
}