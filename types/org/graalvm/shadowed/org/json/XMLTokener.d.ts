import type { Reader } from '../../../../../java/io/Reader.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { JSONTokener } from '../../../../../org/graalvm/shadowed/org/json/JSONTokener.d.ts'
import type { XMLParserConfiguration } from '../../../../../org/graalvm/shadowed/org/json/XMLParserConfiguration.d.ts'
export class XMLTokener extends JSONTokener {
    static entity: { [key: string]: string };
    static dehexchar(paramc: string): number;
    constructor(r: Reader)
    constructor(r: Reader, configuration: XMLParserConfiguration)
    constructor(s: string)
    // private configuration: XMLParserConfiguration;
    nextCDATA(): string;
    nextContent(): Object;
    nextEntity(ampersand: string): Object;
    nextMeta(): Object;
    nextToken(): Object;
    skipPast(to: string): void;
}