import type { BlockChangeRecord } from '../../../../../com/viaversion/viaversion/api/minecraft/BlockChangeRecord.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BlockChangeRecord1_8 extends Object implements BlockChangeRecord {
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    readonly blockId: number;
    readonly sectionX: number;
    readonly sectionZ: number;
    readonly y: number;
    getBlockId(): number;
    getSectionX(): number;
    getSectionY(): number;
    getSectionZ(): number;
    getY(): number;
    getY(arg0: number): number;
    setBlockId(arg0: number): void;
}