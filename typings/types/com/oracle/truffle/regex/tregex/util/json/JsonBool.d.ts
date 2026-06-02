import type { JsonValue } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
import type { PrintWriter } from '../../../../../../../java/io/PrintWriter.d.ts'
export class JsonBool extends JsonValue {
    constructor(value: boolean)
    // private value: boolean;
    dump(writer: PrintWriter, indent: number): void;
}