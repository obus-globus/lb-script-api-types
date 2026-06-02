import type { TruffleFile } from '../../../../../../../com/oracle/truffle/api/TruffleFile.d.ts'
import type { JsonConvertible } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonConvertible.d.ts'
import type { PrintWriter } from '../../../../../../../java/io/PrintWriter.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class JsonValue extends Object implements JsonConvertible {
    constructor()
    dump(path: TruffleFile): void;
    dump(writer: PrintWriter, indent: number): void;
    toJson(): JsonValue;
    toString(): string;
}