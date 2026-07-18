import type { ApplicationCall } from '../../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { ApplicationCallPipeline } from '../../../../../io/ktor/server/application/ApplicationCallPipeline.d.ts'
import type { Hook } from '../../../../../io/ktor/server/application/Hook.d.ts'
import type { ByteReadChannel } from '../../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ReceiveRequestBytes extends Object implements Hook<(param0: ApplicationCall, param1: ByteReadChannel) => ByteReadChannel> {
    static INSTANCE: ReceiveRequestBytes;
    install(pipeline: ApplicationCallPipeline, handler: (param0: ApplicationCall, param1: ByteReadChannel) => ByteReadChannel): void;
}