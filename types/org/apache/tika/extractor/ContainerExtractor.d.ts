import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EmbeddedResourceHandler } from '../../../../org/apache/tika/extractor/EmbeddedResourceHandler.d.ts'
import type { TikaInputStream } from '../../../../org/apache/tika/io/TikaInputStream.d.ts'
export interface ContainerExtractor extends Serializable, Object{
    extract(arg0: TikaInputStream, arg1: ContainerExtractor, arg2: EmbeddedResourceHandler): void;
    isSupported(arg0: TikaInputStream): boolean;
}