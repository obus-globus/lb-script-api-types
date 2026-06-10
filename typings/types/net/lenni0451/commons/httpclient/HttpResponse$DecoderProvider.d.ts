import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HttpResponse$InputStreamMapper } from '../../../../net/lenni0451/commons/httpclient/HttpResponse$InputStreamMapper.d.ts'
export interface HttpResponse$DecoderProvider extends Object {
    get(arg0: string): (param0: InputStream) => InputStream;
}