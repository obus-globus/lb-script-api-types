import type { IOException } from '../../../java/io/IOException.d.ts'
import type { CountDownLatch } from '../../../java/util/concurrent/CountDownLatch.d.ts'
import type { AtomicBoolean } from '../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PublicSuffixList } from '../../../okhttp3/internal/publicsuffix/PublicSuffixList.d.ts'
import type { PublicSuffixList$Companion } from '../../../okhttp3/internal/publicsuffix/PublicSuffixList$Companion.d.ts'
import type { ByteString } from '../../../okio/ByteString.d.ts'
import type { Source } from '../../../okio/Source.d.ts'
export abstract class BasePublicSuffixList extends Object implements PublicSuffixList {
    static Companion: PublicSuffixList$Companion;
    constructor()
    bytes: ByteString;
    exceptionBytes: ByteString;
    // private listRead: AtomicBoolean;
    readonly path: Object;
    // private readCompleteLatch: CountDownLatch;
    // private readFailure: IOException | null;
    ensureLoaded(): void;
    listSource(): Source;
    // private readTheList(): void;
    // private readTheListUninterruptibly(): void;
}