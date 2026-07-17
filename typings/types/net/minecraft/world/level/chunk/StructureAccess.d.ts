import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Structure } from '../../../../../net/minecraft/world/level/levelgen/structure/Structure.d.ts'
import type { StructureStart } from '../../../../../net/minecraft/world/level/levelgen/structure/StructureStart.d.ts'
export interface StructureAccess extends Object{
    addReferenceForStructure(structure: Structure, reference: number): void;
    getAllReferences(): JavaMap<Structure, (Object | null)[]>;
    getReferencesForStructure(structure: Structure): (Object | null)[];
    getStartForStructure(structure: Structure): StructureStart;
    setAllReferences(data: JavaMap<Structure, (Object | null)[]>): void;
    setStartForStructure(structure: Structure, structureStart: StructureStart): void;
}