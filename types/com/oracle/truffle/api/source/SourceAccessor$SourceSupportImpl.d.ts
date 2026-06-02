import type { Accessor$SourceSupport } from '../../../../../com/oracle/truffle/api/impl/Accessor$SourceSupport.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { Source$SourceBuilder } from '../../../../../com/oracle/truffle/api/source/Source$SourceBuilder.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
import type { URI } from '../../../../../java/net/URI.d.ts'
import type { URL } from '../../../../../java/net/URL.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SourceAccessor$SourceSupportImpl extends Accessor$SourceSupport {
    constructor()
    copySource(source: Source): Source;
    findMimeType(url: URL, fileSystemContext: Object): string;
    getOrCreatePolyglotSource(source: Source, createSource: (param0: Source) => Object): Object;
    getOriginalURI(source: Source): URI;
    getSourceIdentifier(source: Source): Object;
    getSourceOptions(source: Source): { [key: string]: string };
    invalidateAfterPreinitialiation(source: Source): void;
    mergeLoadedSources(sources: Source[]): void;
    newBuilder(language: string, origin: File): Source$SourceBuilder;
    setEmbedderSource(builder: Source$SourceBuilder, enabled: boolean): void;
    setFileSystemContext(builder: Source$SourceBuilder, fileSystemContext: Object): void;
    setPath(builder: Source$SourceBuilder, path: string): void;
    setURL(builder: Source$SourceBuilder, url: URL): void;
}