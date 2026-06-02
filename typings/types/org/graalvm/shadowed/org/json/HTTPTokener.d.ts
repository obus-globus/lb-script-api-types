import type { JSONTokener } from '../../../../../org/graalvm/shadowed/org/json/JSONTokener.d.ts'
export class HTTPTokener extends JSONTokener {
    static dehexchar(paramc: string): number;
    constructor(string: string)
    nextToken(): string;
}