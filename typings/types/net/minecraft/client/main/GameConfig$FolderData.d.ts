import type { File } from '../../../../java/io/File.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GameConfig$FolderData extends Object {
    constructor(gameDirectory: File, resourcePackDirectory: File, assetDirectory: File, assetIndex: string)
    assetDirectory: File;
    assetIndex: string;
    gameDirectory: File;
    resourcePackDirectory: File;
    getExternalAssetSource(): Path;
}