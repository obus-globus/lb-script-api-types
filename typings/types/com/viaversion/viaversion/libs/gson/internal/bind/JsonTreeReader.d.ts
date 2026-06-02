import type { JsonElement } from '../../../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { JsonReader } from '../../../../../../../com/viaversion/viaversion/libs/gson/stream/JsonReader.d.ts'
import type { JsonToken } from '../../../../../../../com/viaversion/viaversion/libs/gson/stream/JsonToken.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class JsonTreeReader extends JsonReader {
    constructor(arg0: JsonElement)
    // private pathIndices: number[];
    // private pathNames: string[];
    // private stack: Object[];
    // private stackSize: number;
    beginArray(): void;
    beginObject(): void;
    close(): void;
    endArray(): void;
    endObject(): void;
    // private expect(arg0: JsonToken): void;
    getPath(): string;
    // private getPath(arg0: boolean): string;
    getPreviousPath(): string;
    hasNext(): boolean;
    // private locationString(): string;
    nextBoolean(): boolean;
    nextDouble(): number;
    nextInt(): number;
    nextJsonElement(): JsonElement;
    nextLong(): number;
    nextName(): string;
    // private nextName(arg0: boolean): string;
    nextNull(): void;
    nextString(): string;
    peek(): JsonToken;
    // private peekStack(): Object;
    // private popStack(): Object;
    promoteNameToValue(): void;
    // private push(arg0: Object): void;
    skipValue(): void;
    toString(): string;
}