import type { BlockFace } from '../../../../../../com/viaversion/viaversion/api/minecraft/BlockFace.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class StairConnectionHandler$StairData extends Record {
    private constructor(bottom: boolean, shape: number, type: number, facing: BlockFace)
    // private bottom: boolean;
    // private facing: BlockFace;
    // private shape: number;
    // private type: number;
    bottom(): boolean;
    equals(arg0: Object | null): boolean;
    facing(): BlockFace;
    hashCode(): number;
    shape(): number;
    toString(): string;
    type(): number;
}