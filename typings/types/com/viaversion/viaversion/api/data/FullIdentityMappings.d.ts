import type { FullMappings } from '../../../../../com/viaversion/viaversion/api/data/FullMappings.d.ts'
import type { FullMappingsBase } from '../../../../../com/viaversion/viaversion/api/data/FullMappingsBase.d.ts'
import type { MappingDataLoader$IdentifiersPair } from '../../../../../com/viaversion/viaversion/api/data/MappingDataLoader$IdentifiersPair.d.ts'
import type { Mappings } from '../../../../../com/viaversion/viaversion/api/data/Mappings.d.ts'
import type { Key } from '../../../../../com/viaversion/viaversion/util/Key.d.ts'
export class FullIdentityMappings extends FullMappingsBase {
    static of(paramarg0: MappingDataLoader$IdentifiersPair, paramarg1: Mappings): FullMappings;
    constructor(arg0: MappingDataLoader$IdentifiersPair, arg1: Mappings)
    identifier(arg0: number): string;
    identifier(arg0: string): string;
    inverse(): FullIdentityMappings;
    isIdentity(): boolean;
    isIntIdIdentity(): boolean;
    keyFromMappedKey(arg0: string): Key;
}