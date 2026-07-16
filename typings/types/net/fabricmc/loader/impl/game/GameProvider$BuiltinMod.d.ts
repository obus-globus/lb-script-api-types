import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModMetadata } from '../../../../../net/fabricmc/loader/api/metadata/ModMetadata.d.ts'
export class GameProvider$BuiltinMod extends Object {
    constructor(arg0: Path[], arg1: ModMetadata)
    metadata: ModMetadata;
    paths: Path[];
}