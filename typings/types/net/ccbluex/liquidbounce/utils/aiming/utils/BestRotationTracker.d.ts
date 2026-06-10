import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RotationWithVector } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/RotationWithVector.d.ts'
export class BestRotationTracker extends Object {
    constructor(comparator: (param0: Object) => boolean, ignoreVisibility: boolean)
    readonly bestInvisible: RotationWithVector | null;
    readonly bestVisible: RotationWithVector | null;
    readonly comparator: (param0: Object) => boolean;
    readonly ignoreVisibility: boolean;
    considerRotation(rotation: RotationWithVector, visible: boolean): void;
    getIsRotationBetter(base: RotationWithVector | null, newRotation: RotationWithVector, visible: boolean): boolean;
}