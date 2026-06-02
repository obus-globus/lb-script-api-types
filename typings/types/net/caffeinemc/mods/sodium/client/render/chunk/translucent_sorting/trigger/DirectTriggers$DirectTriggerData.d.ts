import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { DynamicTopoData } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/DynamicTopoData.d.ts'
import type { SectionPos } from '../../../../../../../../../net/minecraft/core/SectionPos.d.ts'
import type { Vector3dc } from '../../../../../../../../../org/joml/Vector3dc.d.ts'
export class DirectTriggers$DirectTriggerData extends Object {
    constructor(arg0: DynamicTopoData, arg1: SectionPos, arg2: Vector3dc)
    // private dynamicData: DynamicTopoData;
    // private next: DirectTriggers$DirectTriggerData;
    // private sectionCenter: Vector3dc;
    // private sectionPos: SectionPos;
    // private triggerCameraPos: Vector3dc;
    centerRelativeAngleCos(arg0: Vector3dc, arg1: Vector3dc): number;
    getSectionCenter(): Vector3dc;
    getSectionCenterDistSquared(arg0: Vector3dc): number;
    getSectionCenterTriggerCameraDist(): number;
    isAngleTriggering(arg0: Vector3dc): boolean;
}