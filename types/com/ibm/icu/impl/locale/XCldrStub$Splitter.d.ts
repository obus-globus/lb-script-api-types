import type { Pattern } from '../../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class XCldrStub$Splitter extends Object {
    static on(paramarg0: string): XCldrStub$Splitter;
    static on(paramarg0: Pattern): XCldrStub$Splitter;
    constructor(arg0: Pattern)
    constructor(arg0: string)
    // private pattern: Pattern;
    // private trimResults: boolean;
    split(arg0: string): string[];
    splitToList(arg0: string): string[];
    trimResults(): XCldrStub$Splitter;
}