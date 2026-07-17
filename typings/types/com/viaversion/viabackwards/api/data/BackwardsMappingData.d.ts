import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { MappedItem } from '../../../../../com/viaversion/viabackwards/api/data/MappedItem.d.ts'
import type { BiMappings } from '../../../../../com/viaversion/viaversion/api/data/BiMappings.d.ts'
import type { MappingDataBase } from '../../../../../com/viaversion/viaversion/api/data/MappingDataBase.d.ts'
import type { Protocol } from '../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Logger } from '../../../../../java/util/logging/Logger.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class BackwardsMappingData extends MappingDataBase {
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: string, arg2: Class<Protocol<any, any, any, any>>)
    backwardsItemMappings: JavaMap<any, any>;
    // private enchantmentNames: JavaMap<any, any>;
    // private entityNames: JavaMap<string, string>;
    // private vvProtocolClass: Class<Protocol<any, any, any, any>>;
    getBackwardsItemMappings(): JavaMap<any, any>;
    getLogger(): Logger;
    getMappedItem(arg0: number): MappedItem;
    getMappedNamedSound(arg0: string): string;
    getNewAttributeId(arg0: number): number;
    getNewBlockId(arg0: number): number;
    getNewItemId(arg0: number): number;
    getOldItemId(arg0: number): number;
    getViaVersionProtocolClass(): Class<Protocol<any, any, any, any>>;
    loadBiMappings(arg0: Map$Entry<string, Tag>[], arg1: string): BiMappings;
    loadExtras(arg0: Map$Entry<string, Tag>[]): void;
    // private loadNameByIdMappings(arg0: Map$Entry<string, Tag>[], arg1: string): JavaMap<any, any>;
    // private loadNameByStringMappings(arg0: Map$Entry<string, Tag>[], arg1: string): JavaMap<string, string>;
    mappedEnchantmentName(arg0: number): string;
    mappedEntityName(arg0: string): string;
    readMappingsFile(arg0: string): Map$Entry<string, Tag>[];
}