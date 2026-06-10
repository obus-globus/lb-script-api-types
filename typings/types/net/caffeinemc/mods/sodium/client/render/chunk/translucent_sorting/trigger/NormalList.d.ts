import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { CameraMovement } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/trigger/CameraMovement.d.ts'
import type { Group } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/trigger/Group.d.ts'
import type { NormalPlanes } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/trigger/NormalPlanes.d.ts'
import type { SortTriggering } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/trigger/SortTriggering.d.ts'
import type { DoubleInterval } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/util/interval_tree/DoubleInterval.d.ts'
import type { Vector3fc } from '../../../../../../../../../org/joml/Vector3fc.d.ts'
export class NormalList extends Object {
    static queryRange(paramarg0: number[], paramarg1: number, paramarg2: number): boolean;
    constructor(arg0: Vector3fc, arg1: number)
    readonly alignedDirection: number;
    // private groupsByInterval: Map<DoubleInterval, Group[]>;
    // private groupsBySection: Long2ReferenceOpenHashMap<Group>;
    // private intervalTree: number[];
    readonly normal: Vector3fc;
    // private addGroupInterval(arg0: Group): void;
    addSection(arg0: NormalPlanes, arg1: number): void;
    getAlignedDirection(): number;
    getNormal(): Vector3fc;
    hasSection(arg0: number): boolean;
    isAligned(): boolean;
    isEmpty(): boolean;
    processCatchup(arg0: SortTriggering, arg1: CameraMovement, arg2: number): void;
    processMovement(arg0: SortTriggering, arg1: CameraMovement): void;
    // private removeGroupInterval(arg0: Group): void;
    removeSection(arg0: number): void;
    updateSection(arg0: NormalPlanes, arg1: number): void;
}