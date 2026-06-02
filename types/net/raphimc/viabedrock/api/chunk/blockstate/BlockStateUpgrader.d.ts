import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
import type { BlockStateUpgradeSchema } from '../../../../../../net/raphimc/viabedrock/api/chunk/blockstate/BlockStateUpgradeSchema.d.ts'
export class BlockStateUpgrader extends Object {
    constructor()
    // private schemas: BlockStateUpgradeSchema[];
    upgradeToLatest(arg0: Map$Entry<string, Tag>[]): void;
}