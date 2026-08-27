import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BackwardsMappingData } from '../../../../../../com/viaversion/viabackwards/api/data/BackwardsMappingData.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class BackwardsMappingData1_13 extends BackwardsMappingData {
    static nameFromIdentifier(paramarg0: string): string;
    constructor()
    readonly pistonIds: JavaMap<any, any>;
    readonly statisticMappings: JavaMap<any, any>;
    readonly translateMappings: JavaMap<string, string>;
    // private addPistonEntries(arg0: string, arg1: number): void;
    checkValidity(arg0: number, arg1: number, arg2: string): number;
    getNewBlockStateId(arg0: number): number;
    getPistonIds(): JavaMap<any, any>;
    getStatisticMappings(): JavaMap<any, any>;
    getTranslateMappings(): JavaMap<string, string>;
    loadBackwardsItemMappings(arg0: Map$Entry<string, Tag>[]): void;
    loadExtras(arg0: Map$Entry<string, Tag>[]): void;
}