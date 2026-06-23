import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { CompletionStage } from '../../../java/util/concurrent/CompletionStage.d.ts'
import type { Flow$Subscriber } from '../../../java/util/concurrent/Flow$Subscriber.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface HttpResponse$BodySubscriber<T extends unknown> extends Flow$Subscriber<ByteBuffer[]>, Object{
    getBody(): CompletionStage<T>;
}