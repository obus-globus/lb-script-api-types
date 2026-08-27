import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { FullMappings } from '../../../../../com/viaversion/viaversion/api/data/FullMappings.d.ts'
import type { MappingDataLoader$IdentifiersPair } from '../../../../../com/viaversion/viaversion/api/data/MappingDataLoader$IdentifiersPair.d.ts'
import type { Mappings } from '../../../../../com/viaversion/viaversion/api/data/Mappings.d.ts'
import type { Key } from '../../../../../com/viaversion/viaversion/util/Key.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FullMappingsBase extends Object implements FullMappings {
    static of(paramarg0: MappingDataLoader$IdentifiersPair, paramarg1: Mappings): FullMappings;
    constructor(arg0: MappingDataLoader$IdentifiersPair, arg1: Mappings)
    constructor(arg0: JavaMap<any, any>, arg1: JavaMap<any, any>, arg2: Key[], arg3: Key[], arg4: Mappings)
    // private idToKey: Key[];
    // private mappedIdToKey: Key[];
    // private mappedStringToId: JavaMap<any, any>;
    // private mappings: Mappings;
    // private stringToId: JavaMap<any, any>;
    getNewId(arg0: number): number;
    id(arg0: string): number;
    identifier(arg0: number): string;
    identifier(arg0: string): string;
    inverse(): FullMappings;
    isIntIdIdentity(): boolean;
    keyFromId(arg0: number): Key;
    keyFromMappedKey(arg0: string): Key;
    mappedId(arg0: string): number;
    mappedIdentifier(arg0: number): string;
    mappedIdentifier(arg0: string): string;
    mappedKeyFromKey(arg0: string): Key;
    mappedKeyFromMappedId(arg0: number): Key;
    mappedSize(): number;
    setNewId(arg0: number, arg1: number): void;
    size(): number;
}