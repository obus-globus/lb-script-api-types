import type { TruffleFile } from '../../../../../../../com/oracle/truffle/api/TruffleFile.d.ts'
import type { JsonObject$JsonObjectProperty } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonObject$JsonObjectProperty.d.ts'
import type { JsonValue } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
import type { PrintWriter } from '../../../../../../../java/io/PrintWriter.d.ts'
export class JsonObject extends JsonValue {
    constructor(props: JsonObject$JsonObjectProperty[])
    // private properties: JsonObject$JsonObjectProperty[];
    append(props: JsonObject$JsonObjectProperty[]): JsonObject;
    dump(path: TruffleFile): void;
    dump(writer: PrintWriter, indent: number): void;
}