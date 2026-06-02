import type { JsonValue } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
import type { PrintWriter } from '../../../../../../../java/io/PrintWriter.d.ts'
export class JsonString extends JsonValue {
    constructor(value: string)
    // private value: string;
    dump(writer: PrintWriter, indent: number): void;
}