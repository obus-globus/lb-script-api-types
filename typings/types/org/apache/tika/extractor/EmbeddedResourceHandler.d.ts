import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MediaType } from '../../../../org/apache/tika/mime/MediaType.d.ts'
export interface EmbeddedResourceHandler extends Object{
    handle(arg0: string, arg1: MediaType, arg2: InputStream): void;
}