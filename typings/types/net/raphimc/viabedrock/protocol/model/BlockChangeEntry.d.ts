import type { BlockPosition } from '../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BlockChangeEntry extends Record {
    constructor(position: BlockPosition, blockState: number, flags: number, messageEntityUniqueId: number, messageType: number)
    // private blockState: number;
    // private flags: number;
    // private messageEntityUniqueId: number;
    // private messageType: number;
    // private position: BlockPosition;
    blockState(): number;
    equals(arg0: Object | null): boolean;
    flags(): number;
    hashCode(): number;
    messageEntityUniqueId(): number;
    messageType(): number;
    position(): BlockPosition;
    toString(): string;
}