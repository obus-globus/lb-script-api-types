import type { File } from '../../../../../java/io/File.d.ts'
import type { IOException } from '../../../../../java/io/IOException.d.ts'
import type { CompletionService } from '../../../../../java/util/concurrent/CompletionService.d.ts'
import type { ExecutionException } from '../../../../../java/util/concurrent/ExecutionException.d.ts'
import type { Future } from '../../../../../java/util/concurrent/Future.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MultiPartDownloadConfig } from '../../../../../net/ccbluex/liquidbounce/mcef/MultiPartDownloadConfig.d.ts'
import type { MCEFProgressListener } from '../../../../../net/ccbluex/liquidbounce/mcef/listeners/MCEFProgressListener.d.ts'
import type { MultiPartDownloader$Metadata } from '../../../../../net/ccbluex/liquidbounce/mcef/utils/MultiPartDownloader$Metadata.d.ts'
import type { MultiPartDownloader$Part } from '../../../../../net/ccbluex/liquidbounce/mcef/utils/MultiPartDownloader$Part.d.ts'
import type { MultiPartDownloader$RangeProbe } from '../../../../../net/ccbluex/liquidbounce/mcef/utils/MultiPartDownloader$RangeProbe.d.ts'
import type { HttpUrl } from '../../../../../okhttp3/HttpUrl.d.ts'
import type { OkHttpClient } from '../../../../../okhttp3/OkHttpClient.d.ts'
export class MultiPartDownloader extends Object {
    constructor(arg0: OkHttpClient, arg1: MultiPartDownloadConfig)
    // private client: OkHttpClient;
    // private config: MultiPartDownloadConfig;
    canAttempt(): boolean;
    // private cancel(arg0: Future<Object>[]): void;
    download(arg0: MCEFProgressListener, arg1: string, arg2: HttpUrl, arg3: File): boolean;
    // private fetchHeadContentLength(arg0: HttpUrl): number;
    // private fetchHeadContentLengthOrNull(arg0: HttpUrl): number;
    // private fetchMetadata(arg0: HttpUrl, arg1: number): MultiPartDownloader$Metadata;
    // private fetchMetadataOrNull(arg0: HttpUrl, arg1: number): MultiPartDownloader$Metadata;
    // private makeParentDirectories(arg0: File): void;
    // private partCountFor(arg0: number): number;
    // private probeRangeSupport(arg0: HttpUrl, arg1: number): MultiPartDownloader$RangeProbe;
    // private split(arg0: number): MultiPartDownloader$Part[];
    // private unwrap(arg0: HttpUrl, arg1: ExecutionException): IOException;
    // private waitForParts(arg0: Future<Object>[], arg1: CompletionService<void>): void;
}