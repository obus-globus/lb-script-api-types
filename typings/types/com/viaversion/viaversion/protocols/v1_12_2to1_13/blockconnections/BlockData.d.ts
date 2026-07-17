import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { BlockFace } from '../../../../../../com/viaversion/viaversion/api/minecraft/BlockFace.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class BlockData extends Object {
    static connectionTypeId(paramarg0: string): number;
    constructor()
    // private connectData: JavaMap<any, any>;
    connectsTo(arg0: number, arg1: BlockFace, arg2: boolean): boolean;
    put(arg0: number, arg1: boolean[]): void;
}