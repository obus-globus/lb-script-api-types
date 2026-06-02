import type { File } from '../../../../../java/io/File.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MultiPartDownloadConfig } from '../../../../../net/ccbluex/liquidbounce/mcef/MultiPartDownloadConfig.d.ts'
import type { MCEFProgressListener } from '../../../../../net/ccbluex/liquidbounce/mcef/listeners/MCEFProgressListener.d.ts'
import type { OkHttpClient } from '../../../../../okhttp3/OkHttpClient.d.ts'
export class FileUtils extends Object {
    static downloadFile(paramarg0: MCEFProgressListener, paramarg1: string, paramarg2: string, paramarg3: File): void;
    static downloadFile(paramarg0: MCEFProgressListener, paramarg1: string, paramarg2: string, paramarg3: File, paramarg4: MultiPartDownloadConfig): void;
    static downloadFile(paramarg0: MCEFProgressListener, paramarg1: string, paramarg2: string, paramarg3: File, paramarg4: MultiPartDownloadConfig, paramarg5: OkHttpClient): void;
    static extractTarGz(paramarg0: MCEFProgressListener, paramarg1: string, paramarg2: File, paramarg3: File): void;
    private constructor()
}