import type { SslContext } from '../../../../io/netty/handler/ssl/SslContext.d.ts'
import type { ReferenceCounted } from '../../../../io/netty/util/ReferenceCounted.d.ts'
export abstract class ReferenceCountedOpenSslContext extends SslContext implements ReferenceCounted {
}