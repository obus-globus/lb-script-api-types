import type { FullMappings } from '../../../../../com/viaversion/viaversion/api/data/FullMappings.d.ts'
import type { MappingDataLoader$IdentifiersPair } from '../../../../../com/viaversion/viaversion/api/data/MappingDataLoader$IdentifiersPair.d.ts'
import type { Mappings } from '../../../../../com/viaversion/viaversion/api/data/Mappings.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FullMappingsBase extends Object implements FullMappings {
    static of(paramarg0: MappingDataLoader$IdentifiersPair, paramarg1: Mappings): FullMappings;
    constructor(arg0: MappingDataLoader$IdentifiersPair, arg1: Mappings)
    private constructor(arg0: Object2IntMap<string>, arg1: Object2IntMap<string>, arg2: string[], arg3: string[], arg4: Mappings)
    // private idToString: string[];
    // private mappedIdToString: string[];
    // private mappedStringToId: Object2IntMap<string>;
    // private mappings: Mappings;
    // private stringToId: Object2IntMap<string>;
    getNewId(arg0: number): number;
    id(arg0: string): number;
    identifier(arg0: number): string;
    identifier(arg0: string): string;
    inverse(): FullMappings;
    isIntIdIdentity(): boolean;
    mappedId(arg0: string): number;
    mappedIdentifier(arg0: number): string;
    mappedIdentifier(arg0: string): string;
    mappedSize(): number;
    setNewId(arg0: number, arg1: number): void;
    size(): number;
}