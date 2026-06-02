import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { StructureProcessor } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureProcessor.d.ts'
export class StructureProcessorList extends Object {
    constructor(list: StructureProcessor[])
    // private list: StructureProcessor[];
    list(): StructureProcessor[];
    toString(): string;
}