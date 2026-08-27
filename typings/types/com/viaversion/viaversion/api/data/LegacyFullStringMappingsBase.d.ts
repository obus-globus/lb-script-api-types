import type { FullMappings } from '../../../../../com/viaversion/viaversion/api/data/FullMappings.d.ts'
import type { FullMappingsBase } from '../../../../../com/viaversion/viaversion/api/data/FullMappingsBase.d.ts'
import type { MappingDataLoader$IdentifiersPair } from '../../../../../com/viaversion/viaversion/api/data/MappingDataLoader$IdentifiersPair.d.ts'
import type { Mappings } from '../../../../../com/viaversion/viaversion/api/data/Mappings.d.ts'
import type { Key } from '../../../../../com/viaversion/viaversion/util/Key.d.ts'
export class LegacyFullStringMappingsBase extends FullMappingsBase {
    static of(paramarg0: MappingDataLoader$IdentifiersPair, paramarg1: Mappings): FullMappings;
    constructor(arg0: MappingDataLoader$IdentifiersPair, arg1: Mappings)
    // private idToString: string[];
    // private mappedIdToString: string[];
    identifier(arg0: number): string;
    identifier(arg0: string): string;
    inverse(): FullMappings;
    keyFromId(arg0: number): Key;
    keyFromMappedKey(arg0: string): Key;
    mappedIdentifier(arg0: number): string;
    mappedIdentifier(arg0: string): string;
    mappedKeyFromKey(arg0: string): Key;
    mappedKeyFromMappedId(arg0: number): Key;
}