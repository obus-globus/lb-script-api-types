import type { FullMappings } from '../../../../../com/viaversion/viaversion/api/data/FullMappings.d.ts'
import type { FullMappingsBase } from '../../../../../com/viaversion/viaversion/api/data/FullMappingsBase.d.ts'
import type { MappingDataLoader$IdentifiersPair } from '../../../../../com/viaversion/viaversion/api/data/MappingDataLoader$IdentifiersPair.d.ts'
import type { Mappings } from '../../../../../com/viaversion/viaversion/api/data/Mappings.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ParticleMappings extends FullMappingsBase {
    static of(paramarg0: MappingDataLoader$IdentifiersPair, paramarg1: Mappings): FullMappings;
    constructor(arg0: MappingDataLoader$IdentifiersPair, arg1: Mappings)
    // private blockParticleIds: (Object | null)[];
    // private itemParticleIds: (Object | null)[];
    addBlockParticle(arg0: string): boolean;
    addItemParticle(arg0: string): boolean;
    getNewId(arg0: number): number;
    isBlockParticle(arg0: number): boolean;
    isItemParticle(arg0: number): boolean;
    mappedIdentifier(arg0: number): string;
    mappedIdentifier(arg0: string): string;
}