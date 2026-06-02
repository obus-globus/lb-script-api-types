import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export abstract class BlockStateUpgradeSchema extends Object {
    constructor(arg0: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    // private actions: (param0: Map$Entry<string, Tag>[]) => void[];
    // private version: number;
    upgrade(arg0: Map$Entry<string, Tag>[]): void;
    version(): number;
}