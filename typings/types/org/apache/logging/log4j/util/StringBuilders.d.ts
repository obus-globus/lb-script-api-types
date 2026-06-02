import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class StringBuilders extends Object {
    static appendDqValue(paramsb: StringBuilder, paramvalue: Object): StringBuilder;
    static appendKeyDqValue(paramsb: StringBuilder, paramkey: string, paramvalue: Object): StringBuilder;
    static appendKeyDqValue(paramsb: StringBuilder, paramentry: Map$Entry<string, string>): StringBuilder;
    static appendSpecificTypes(paramstringBuilder: StringBuilder, paramobj: Object): boolean;
    static appendValue(paramstringBuilder: StringBuilder, paramobj: Object): void;
    static equals(paramleft: CharSequence, paramleftOffset: number, paramleftLength: number, paramright: CharSequence, paramrightOffset: number, paramrightLength: number): boolean;
    static equalsIgnoreCase(paramleft: CharSequence, paramleftOffset: number, paramleftLength: number, paramright: CharSequence, paramrightOffset: number, paramrightLength: number): boolean;
    static escapeJson(paramtoAppendTo: StringBuilder, paramstart: number): void;
    static escapeXml(paramtoAppendTo: StringBuilder, paramstart: number): void;
    static trimToMaxSize(paramstringBuilder: StringBuilder, parammaxSize: number): void;
    private constructor()
}