import type { FileChannel } from '../../../../../java/nio/channels/FileChannel.d.ts'
import type { Callable } from '../../../../../java/util/concurrent/Callable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MultiPartDownloader } from '../../../../../net/ccbluex/liquidbounce/mcef/utils/MultiPartDownloader.d.ts'
import type { MultiPartDownloader$Part } from '../../../../../net/ccbluex/liquidbounce/mcef/utils/MultiPartDownloader$Part.d.ts'
import type { MultiPartDownloader$ProgressReporter } from '../../../../../net/ccbluex/liquidbounce/mcef/utils/MultiPartDownloader$ProgressReporter.d.ts'
import type { HttpUrl } from '../../../../../okhttp3/HttpUrl.d.ts'
import type { Request } from '../../../../../okhttp3/Request.d.ts'
import type { Response } from '../../../../../okhttp3/Response.d.ts'
import type { BufferedSource } from '../../../../../okio/BufferedSource.d.ts'
export class MultiPartDownloader$PartDownload extends Object implements Callable<void> {
    private constructor(null_: MultiPartDownloader, arg1: MultiPartDownloader$Part, arg2: MultiPartDownloader$ProgressReporter, arg3: HttpUrl, arg4: FileChannel, arg5: number)
    // private channel: FileChannel;
    // private part: MultiPartDownloader$Part;
    // private reporter: MultiPartDownloader$ProgressReporter;
    // private totalLength: number;
    // private url: HttpUrl;
    call(): void;
    // private copyPart(arg0: BufferedSource, arg1: FileChannel, arg2: number, arg3: number, arg4: number): number;
    // private downloadRange(arg0: number, arg1: number, arg2: number): number;
    // private executeRequest(arg0: Request): Response;
    // private readChunk(arg0: BufferedSource, arg1: number[]): number;
    // private readChunkOrRetry(arg0: BufferedSource, arg1: number[], arg2: number): number;
    // private sleepBeforeRetry(): void;
    // private validateContentRange(arg0: Response, arg1: number, arg2: number): void;
    // private writeFully(arg0: FileChannel, arg1: number[], arg2: number, arg3: number): void;
}