import type { File } from '../../../../../java/io/File.d.ts'
import type { MCEFDownloadManager } from '../../../../../net/ccbluex/liquidbounce/mcef/MCEFDownloadManager.d.ts'
import type { MCEFPlatform } from '../../../../../net/ccbluex/liquidbounce/mcef/MCEFPlatform.d.ts'
export class MCEFProvidedResourceManager extends MCEFDownloadManager {
    constructor(arg0: File, arg1: string[], arg2: string, arg3: MCEFPlatform, arg4: File)
    // private path: File;
    downloadJcef(): void;
    getPlatformDirectory(): File;
    requiresDownload(): boolean;
}