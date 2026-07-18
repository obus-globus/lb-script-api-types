import type { PipelineCall } from '../../../../io/ktor/server/application/PipelineCall.d.ts'
import type { ApplicationReceivePipeline } from '../../../../io/ktor/server/request/ApplicationReceivePipeline.d.ts'
import type { ApplicationRequest } from '../../../../io/ktor/server/request/ApplicationRequest.d.ts'
import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface PipelineRequest extends ApplicationRequest, Object{
    readonly call: PipelineCall;
    readonly pipeline: ApplicationReceivePipeline;
    receiveChannel(): ByteReadChannel;
    setHeader(name: string, values: string[] | null): void;
    setReceiveChannel(channel: ByteReadChannel): void;
}