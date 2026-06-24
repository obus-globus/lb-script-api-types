import type { BiConsumer } from '../../../../../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { SortBehavior } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/SortBehavior.d.ts'
import type { DynamicData } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/DynamicData.d.ts'
import type { DynamicTopoData } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/DynamicTopoData.d.ts'
import type { DynamicTopoData$DynamicTopoSorter } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/DynamicTopoData$DynamicTopoSorter.d.ts'
import type { TranslucentData } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/TranslucentData.d.ts'
import type { CameraMovement } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/trigger/CameraMovement.d.ts'
import type { DirectTriggers } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/trigger/DirectTriggers.d.ts'
import type { GFNITriggers } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/trigger/GFNITriggers.d.ts'
import type { SectionPos } from '../../../../../../../../../net/minecraft/core/SectionPos.d.ts'
import type { Vector3dc } from '../../../../../../../../../org/joml/Vector3dc.d.ts'
import type { Vector3fc } from '../../../../../../../../../org/joml/Vector3fc.d.ts'
export class SortTriggering extends Object {
    constructor()
    // private catchupData: DynamicData;
    // private direct: DirectTriggers;
    // private directTriggerCount: number;
    // private gfni: GFNITriggers;
    // private gfniTriggerCount: number;
    // private sortTypeCounters: number[];
    // private triggerSectionCallback: (param0: number, param1: boolean) => void;
    // private triggeredNormalCount: number;
    // private triggeredNormals: Vector3fc[];
    addDebugStrings(arg0: string[], arg1: SortBehavior, arg2: boolean): void;
    applyTopoSortingTriggerChanges(arg0: DynamicTopoData, arg1: DynamicTopoData$DynamicTopoSorter, arg2: SectionPos, arg3: Vector3dc): void;
    // private decrementSortTypeCounter(arg0: TranslucentData): void;
    // private incrementSortTypeCounter(arg0: TranslucentData): void;
    integrateTranslucentData(arg0: TranslucentData, arg1: TranslucentData, arg2: Vector3dc, arg3: (param0: number, param1: boolean) => void): void;
    // private isCatchingUp(): boolean;
    removeSection(arg0: TranslucentData, arg1: number): void;
    // private triggerSectionCatchup(arg0: number, arg1: boolean): void;
    triggerSectionDirect(arg0: SectionPos): void;
    triggerSectionGFNI(arg0: number, arg1: Vector3fc): void;
    triggerSections(arg0: (param0: number, param1: boolean) => void, arg1: CameraMovement): void;
}