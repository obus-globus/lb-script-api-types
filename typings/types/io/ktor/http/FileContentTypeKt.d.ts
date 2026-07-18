import type { JavaMap } from '../../../JavaMap.d.ts'
import type { ContentType } from '../../../io/ktor/http/ContentType.d.ts'
import type { ContentType$Companion } from '../../../io/ktor/http/ContentType$Companion.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Pair } from '../../../kotlin/Pair.d.ts'
import type { Sequence } from '../../../kotlin/sequences/Sequence.d.ts'
export class FileContentTypeKt extends Object {
    static defaultForFileExtension(self: ContentType$Companion, extension: string): ContentType;
    static defaultForFilePath(self: ContentType$Companion, path: string): ContentType;
    static fileExtensions(self: ContentType): string[];
    static fromFileExtension(self: ContentType$Companion, ext: string): ContentType[];
    static fromFilePath(self: ContentType$Companion, path: string): ContentType[];
    static groupByPairs<A extends unknown, B extends unknown>(self: Sequence<Pair<A, B>>): JavaMap<A, B[]>;
    static selectDefault(self: ContentType[]): ContentType;
    static toContentType(self: string): ContentType;
}