import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { MediaType } from '../../../../org/apache/tika/mime/MediaType.d.ts'
import type { ParseContext } from '../../../../org/apache/tika/parser/ParseContext.d.ts'
import type { RenderRequest } from '../../../../org/apache/tika/renderer/RenderRequest.d.ts'
import type { RenderResults } from '../../../../org/apache/tika/renderer/RenderResults.d.ts'
export interface Renderer extends Serializable, Object{
    getSupportedTypes(arg0: ParseContext): MediaType[];
    render(arg0: InputStream, arg1: Metadata, arg2: ParseContext, ...arg3: RenderRequest[]): RenderResults;
}