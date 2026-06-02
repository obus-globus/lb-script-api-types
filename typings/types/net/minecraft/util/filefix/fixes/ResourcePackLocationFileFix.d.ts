import type { Schema } from '../../../../../com/mojang/datafixers/schemas/Schema.d.ts'
import type { FileFix } from '../../../../../net/minecraft/util/filefix/FileFix.d.ts'
export class ResourcePackLocationFileFix extends FileFix {
    constructor(schema: Schema)
    makeFixer(): void;
}