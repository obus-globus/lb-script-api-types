import type { TruffleFile } from '../../../../../../../com/oracle/truffle/api/TruffleFile.d.ts'
import type { JsonValue } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
import type { PrintWriter } from '../../../../../../../java/io/PrintWriter.d.ts'
export class JsonNull extends JsonValue {
    static INSTANCE: JsonNull;
    private constructor()
    dump(path: TruffleFile): void;
    dump(writer: PrintWriter, indent: number): void;
}