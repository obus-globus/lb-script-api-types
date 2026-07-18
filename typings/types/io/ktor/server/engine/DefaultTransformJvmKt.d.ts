import type { MultiPartData } from '../../../../io/ktor/http/content/MultiPartData.d.ts'
import type { PipelineCall } from '../../../../io/ktor/server/application/PipelineCall.d.ts'
import type { PipelineContext } from '../../../../io/ktor/util/pipeline/PipelineContext.d.ts'
import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Source } from '../../../../kotlinx/io/Source.d.ts'
export class DefaultTransformJvmKt extends Object {
    static defaultPlatformTransformations(self: PipelineContext<Object, PipelineCall>, query: Object): Object | null;
    static multiPartData(self: PipelineContext<Object, PipelineCall>, rc: ByteReadChannel): MultiPartData;
    static readTextWithCustomCharset(self: Source, charset: Charset): string;
}