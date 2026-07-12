import type { TruffleFile } from '../../../../../../../com/oracle/truffle/api/TruffleFile.d.ts'
import type { JsonConvertible } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonConvertible.d.ts'
import type { JsonValue } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
import type { PrintWriter } from '../../../../../../../java/io/PrintWriter.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
export class JsonArray extends JsonValue {
    constructor(values: JsonConvertible[])
    constructor(values: Stream<JsonConvertible>)
    constructor(...values: JsonConvertible[])
    constructor(values: JsonConvertible[])
    // private values: JsonConvertible[];
    append(value: JsonConvertible): JsonArray;
    dump(path: TruffleFile): void;
    dump(writer: PrintWriter, indent: number): void;
}