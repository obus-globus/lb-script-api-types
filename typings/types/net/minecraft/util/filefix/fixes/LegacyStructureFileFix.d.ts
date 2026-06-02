import type { Schema } from '../../../../../com/mojang/datafixers/schemas/Schema.d.ts'
import type { FileFix } from '../../../../../net/minecraft/util/filefix/FileFix.d.ts'
export class LegacyStructureFileFix extends FileFix {
    static END_LEGACY_STRUCTURES: string[];
    static LEGACY_TO_CURRENT_MAP: { [key: string]: string };
    static NETHER_LEGACY_STRUCTURES: string[];
    static OVERWORLD_LEGACY_STRUCTURES: string[];
    static STRUCTURE_RANGE: number;
    constructor(schema: Schema)
    makeFixer(): void;
}