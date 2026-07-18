import type { URLBuilder } from '../../../io/ktor/http/URLBuilder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class URLParserKt extends Object {
    static getROOT_PATH(): string[];
    static takeFrom(self: URLBuilder, urlString: string): URLBuilder;
    static takeFromUnsafe(self: URLBuilder, urlString: string): URLBuilder;
}