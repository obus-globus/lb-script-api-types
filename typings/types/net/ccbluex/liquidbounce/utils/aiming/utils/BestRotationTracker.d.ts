import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Rotation } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { RotationWithVector } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/RotationWithVector.d.ts'
export class BestRotationTracker extends Object {
    constructor(comparator: (param0: Rotation, param1: Rotation) => number, ignoreVisibility: boolean)
    readonly bestInvisible: RotationWithVector | null;
    readonly bestVisible: RotationWithVector | null;
    readonly comparator: (param0: Rotation, param1: Rotation) => number;
    readonly ignoreVisibility: boolean;
    considerRotation(rotation: RotationWithVector, visible: boolean): void;
    getIsRotationBetter(base: RotationWithVector | null, newRotation: RotationWithVector, visible: boolean): boolean;
}