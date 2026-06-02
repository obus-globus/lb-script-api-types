import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Flow$Publisher } from '../../../java/util/concurrent/Flow$Publisher.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface HttpRequest$BodyPublisher extends Flow$Publisher<ByteBuffer>, Object{
    contentLength(): number;
}