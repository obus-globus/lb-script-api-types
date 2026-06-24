import type { GlobalBlockPosition } from '../../../../../../../com/viaversion/viaversion/api/minecraft/GlobalBlockPosition.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class LodestoneTracker extends Record {
    static TYPE: Type<LodestoneTracker>;
    constructor(position: GlobalBlockPosition, tracked: boolean)
    // private position: GlobalBlockPosition;
    // private tracked: boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    position(): GlobalBlockPosition;
    toString(): string;
    tracked(): boolean;
}