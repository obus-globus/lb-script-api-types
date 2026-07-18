import type { CacheControl } from '../../../../../io/ktor/http/CacheControl.d.ts'
import type { ContentType } from '../../../../../io/ktor/http/ContentType.d.ts'
import type { ApplicationCall } from '../../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { CompressedFileType } from '../../../../../io/ktor/server/http/content/CompressedFileType.d.ts'
import type { ETagProvider } from '../../../../../io/ktor/server/http/content/ETagProvider.d.ts'
import type { GMTDate } from '../../../../../io/ktor/util/date/GMTDate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class StaticContentConfig<Resource extends unknown> extends Object {
    constructor()
    // private autoHeadResponse: boolean;
    /*not mapped: */ getAutoHeadResponse$ktor_server_core(): boolean;
    // private cacheControl: (param0: Resource) => CacheControl[];
    /*not mapped: */ getCacheControl$ktor_server_core(): (param0: Resource) => CacheControl[];
    // private contentType: (param0: Resource) => ContentType;
    /*not mapped: */ getContentType$ktor_server_core(): (param0: Resource) => ContentType;
    // private defaultContentType: (param0: Resource) => ContentType;
    // private defaultPath: string | null;
    /*not mapped: */ getDefaultPath$ktor_server_core(): string | null;
    // private etagExtractor: ETagProvider;
    /*not mapped: */ getEtagExtractor$ktor_server_core(): ETagProvider;
    // private exclude: (param0: Resource) => boolean;
    /*not mapped: */ getExclude$ktor_server_core(): (param0: Resource) => boolean;
    // private extensions: string[];
    /*not mapped: */ getExtensions$ktor_server_core(): string[];
    // private fallback: (param0: string, param1: ApplicationCall) => void;
    /*not mapped: */ getFallback$ktor_server_core(): (param0: string, param1: ApplicationCall) => void;
    // private lastModifiedExtractor: (param0: Resource) => GMTDate | null;
    /*not mapped: */ getLastModifiedExtractor$ktor_server_core(): (param0: Resource) => GMTDate | null;
    // private modifier: (param0: Resource, param1: ApplicationCall) => void;
    /*not mapped: */ getModifier$ktor_server_core(): (param0: Resource, param1: ApplicationCall) => void;
    // private preCompressedFileTypes: CompressedFileType[];
    /*not mapped: */ getPreCompressedFileTypes$ktor_server_core(): CompressedFileType[];
    cacheControl(block: (param0: Resource) => CacheControl[]): void;
    contentType(block: (param0: Resource) => ContentType | null): void;
    default(path: string | null): void;
    enableAutoHeadResponse(): void;
    etag(block: ETagProvider): void;
    exclude(block: (param0: Resource) => boolean): void;
    extensions(...extensions: string[]): void;
    fallback(fallback: (param0: string, param1: ApplicationCall) => void): void;
    lastModified(block: (param0: Resource) => GMTDate | null): void;
    modify(block: (param0: Resource, param1: ApplicationCall) => void): void;
    preCompressed(...types: CompressedFileType[]): void;
}