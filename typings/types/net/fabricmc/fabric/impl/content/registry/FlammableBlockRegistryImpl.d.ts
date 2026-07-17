import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FlammableBlockRegistry } from '../../../../../../net/fabricmc/fabric/api/registry/FlammableBlockRegistry.d.ts'
import type { FlammableBlockRegistry$Entry } from '../../../../../../net/fabricmc/fabric/api/registry/FlammableBlockRegistry$Entry.d.ts'
import type { TagKey } from '../../../../../../net/minecraft/tags/TagKey.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
export class FlammableBlockRegistryImpl extends Object implements FlammableBlockRegistry {
    static getInstance(paramarg0: Block): FlammableBlockRegistryImpl;
    private constructor(arg0: Block)
    // private computedEntries: JavaMap<Block, FlammableBlockRegistry$Entry>;
    // private key: Block;
    // private registeredEntriesBlock: JavaMap<Block, FlammableBlockRegistry$Entry>;
    // private registeredEntriesTag: JavaMap<TagKey<Block>, FlammableBlockRegistry$Entry>;
    add(arg0: TagKey<Block>, arg1: number, arg2: number): void;
    add(arg0: Block, arg1: number, arg2: number): void;
    add(arg0: TagKey<Block>, arg1: FlammableBlockRegistry$Entry): void;
    add(arg0: Block, arg1: FlammableBlockRegistry$Entry): void;
    clear(arg0: TagKey<Block>): void;
    clear(arg0: Block): void;
    get(arg0: Block): FlammableBlockRegistry$Entry;
    // private getEntryMap(): JavaMap<Block, FlammableBlockRegistry$Entry>;
    getFabric(arg0: Block): FlammableBlockRegistry$Entry;
    remove(arg0: TagKey<Block>): void;
    remove(arg0: Block): void;
}