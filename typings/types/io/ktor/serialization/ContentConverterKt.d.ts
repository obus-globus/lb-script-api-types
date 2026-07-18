import type { Headers } from '../../../io/ktor/http/Headers.d.ts'
import type { ContentConverter } from '../../../io/ktor/serialization/ContentConverter.d.ts'
import type { TypeInfo } from '../../../io/ktor/util/reflect/TypeInfo.d.ts'
import type { ByteReadChannel } from '../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ContentConverterKt extends Object {
    static deserialize(self: ContentConverter[], body: ByteReadChannel, typeInfo: TypeInfo, charset: Charset): Object;
    static suitableCharset(self: Headers, defaultCharset: Charset): Charset;
    static suitableCharsetOrNull(self: Headers, defaultCharset: Charset): Charset | null;
}