import type { FullMappings } from '../../../../../com/viaversion/viaversion/api/data/FullMappings.d.ts'
import type { MappingDataLoader$IdentifiersPair } from '../../../../../com/viaversion/viaversion/api/data/MappingDataLoader$IdentifiersPair.d.ts'
import type { Mappings } from '../../../../../com/viaversion/viaversion/api/data/Mappings.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FullIdentityMappings extends Object implements FullMappings {
    constructor(arg0: MappingDataLoader$IdentifiersPair, arg1: Mappings)
    // private idToString: string[];
    // private mappings: Mappings;
    // private stringToId: { [key: string]: any };
    getNewId(arg0: number): number;
    id(arg0: string): number;
    identifier(arg0: number): string;
    identifier(arg0: string): string;
    inverse(): FullMappings;
    isIdentity(): boolean;
    isIntIdIdentity(): boolean;
    mappedId(arg0: string): number;
    mappedIdentifier(arg0: number): string;
    mappedIdentifier(arg0: string): string;
    mappedSize(): number;
    setNewId(arg0: number, arg1: number): void;
    size(): number;
}