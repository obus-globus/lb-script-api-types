import type { Schema } from '../../../../../com/mojang/datafixers/schemas/Schema.d.ts'
import type { Dynamic } from '../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FileFix } from '../../../../../net/minecraft/util/filefix/FileFix.d.ts'
import type { CompressedNbt } from '../../../../../net/minecraft/util/filefix/access/CompressedNbt.d.ts'
import type { FileAccess } from '../../../../../net/minecraft/util/filefix/access/FileAccess.d.ts'
import type { PlayerData } from '../../../../../net/minecraft/util/filefix/access/PlayerData.d.ts'
export class LevelDatToSavedDataFileFix extends FileFix {
    constructor(schema: Schema)
    // private extractPlayerDataToFile(fallbackFile: FileAccess<PlayerData>, content: Dynamic<Object>): Dynamic<Object>;
    // private extractWorldGenSettingsToFile(targetFile: FileAccess<CompressedNbt>, content: Dynamic<Object>): Dynamic<Object>;
    makeFixer(): void;
}