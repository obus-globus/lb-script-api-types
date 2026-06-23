import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { DynamicTopoData } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/DynamicTopoData.d.ts'
import type { TranslucentData } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/TranslucentData.d.ts'
import type { CameraMovement } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/trigger/CameraMovement.d.ts'
import type { DirectTriggers$DirectTriggerData } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/trigger/DirectTriggers$DirectTriggerData.d.ts'
import type { SortTriggering } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/trigger/SortTriggering.d.ts'
import type { SortTriggering$SectionTriggers } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/trigger/SortTriggering$SectionTriggers.d.ts'
import type { SectionPos } from '../../../../../../../../../net/minecraft/core/SectionPos.d.ts'
import type { Vector3dc } from '../../../../../../../../../org/joml/Vector3dc.d.ts'
export class DirectTriggers extends Object implements SortTriggering$SectionTriggers<DynamicTopoData> {
    constructor()
    // private accumulatedDistance: number;
    // private directTriggerSections: { [key: string]: any };
    getDirectTriggerCount(): number;
    // private insertDirectAngleTrigger(arg0: DirectTriggers$DirectTriggerData, arg1: Vector3dc, arg2: number): void;
    // private insertDirectDistanceTrigger(arg0: DirectTriggers$DirectTriggerData, arg1: Vector3dc, arg2: number): void;
    // private insertTrigger(arg0: number, arg1: DirectTriggers$DirectTriggerData): void;
    integrateSection(arg0: SortTriggering, arg1: SectionPos, arg2: DynamicTopoData, arg3: CameraMovement): void;
    // private processSingleTrigger(arg0: DirectTriggers$DirectTriggerData, arg1: SortTriggering, arg2: Vector3dc): void;
    processTriggers(arg0: SortTriggering, arg1: CameraMovement): void;
    removeSection(arg0: number, arg1: TranslucentData): void;
}