import type { PartData$FileItem } from '../../../../io/ktor/http/content/PartData$FileItem.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MultipartJvmKt extends Object {
    static getStreamProvider(paramarg0: PartData$FileItem): () => InputStream;
}