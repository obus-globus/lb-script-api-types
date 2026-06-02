import type { JsonParser } from '../../../../../../../com/azure/json/implementation/jackson/core/JsonParser.d.ts'
import type { JsonToken } from '../../../../../../../com/azure/json/implementation/jackson/core/JsonToken.d.ts'
import type { JsonParserDelegate } from '../../../../../../../com/azure/json/implementation/jackson/core/util/JsonParserDelegate.d.ts'
export class JsonParserSequence extends JsonParserDelegate {
    static createFlattened(paramarg0: boolean, paramarg1: JsonParser, paramarg2: JsonParser): JsonParserSequence;
    static createFlattened(paramarg0: JsonParser, paramarg1: JsonParser): JsonParserSequence;
    constructor(arg0: JsonParser[])
    constructor(arg0: boolean, arg1: JsonParser[])
    // private _checkForExistingToken: boolean;
    // private _hasToken: boolean;
    // private _nextParserIndex: number;
    // private _parsers: JsonParser[];
    addFlattenedActiveParsers(arg0: JsonParser[]): void;
    close(): void;
    nextToken(): JsonToken;
    skipChildren(): JsonParser;
    switchAndReturnNext(): JsonToken;
    switchToNext(): boolean;
}