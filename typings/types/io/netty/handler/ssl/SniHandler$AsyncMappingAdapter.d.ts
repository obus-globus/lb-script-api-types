import type { SslContext } from '../../../../io/netty/handler/ssl/SslContext.d.ts'
import type { AsyncMapping } from '../../../../io/netty/util/AsyncMapping.d.ts'
import type { Mapping } from '../../../../io/netty/util/Mapping.d.ts'
import type { Future } from '../../../../io/netty/util/concurrent/Future.d.ts'
import type { Promise } from '../../../../io/netty/util/concurrent/Promise.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SniHandler$AsyncMappingAdapter extends Object implements AsyncMapping<string, SslContext> {
    private constructor(arg0: Mapping<string, SslContext>)
    // private mapping: Mapping<string, SslContext>;
    map(arg0: string, arg1: Promise<SslContext>): Future<SslContext>;
}