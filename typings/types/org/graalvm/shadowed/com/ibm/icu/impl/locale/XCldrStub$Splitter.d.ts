import type { Pattern } from '../../../../../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class XCldrStub$Splitter extends Object {
    static on(paramc: string): XCldrStub$Splitter;
    static on(paramp: Pattern): XCldrStub$Splitter;
    constructor(p: Pattern)
    constructor(c: string)
    // private pattern: Pattern;
    // private trimResults: boolean;
    split(input: string): string[];
    splitToList(input: string): string[];
    trimResults(): XCldrStub$Splitter;
}