import type { BlockPosition } from '../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Direction } from '../../../../../../net/raphimc/viabedrock/protocol/data/enums/Direction.d.ts'
export class ClientPlayerEntity$BlockBreakingInfo extends Record {
    constructor(position: BlockPosition, direction: Direction)
    // private direction: Direction;
    // private position: BlockPosition;
    direction(): Direction;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    position(): BlockPosition;
    toString(): string;
}