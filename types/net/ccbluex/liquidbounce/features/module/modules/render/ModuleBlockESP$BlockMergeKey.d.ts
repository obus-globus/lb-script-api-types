import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Color4b } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
export class ModuleBlockESP$BlockMergeKey extends Object {
    constructor(block: Block, color: Color4b | null)
    readonly block: Block;
    readonly color: Color4b | null;
    component1(): Block;
    component2(): Color4b | null;
    copy(block: Block, color: Color4b | null): ModuleBlockESP$BlockMergeKey;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}