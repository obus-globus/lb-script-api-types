import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { JsonReader } from '../../../../../../../../org/spongepowered/include/com/google/gson/stream/JsonReader.d.ts'
import type { JsonToken } from '../../../../../../../../org/spongepowered/include/com/google/gson/stream/JsonToken.d.ts'
export class JsonTreeReader extends JsonReader {
    // private stack: Object[];
    beginArray(): void;
    beginObject(): void;
    close(): void;
    endArray(): void;
    endObject(): void;
    // private expect(arg0: JsonToken): void;
    hasNext(): boolean;
    nextBoolean(): boolean;
    nextDouble(): number;
    nextInt(): number;
    nextLong(): number;
    nextName(): string;
    nextNull(): void;
    nextString(): string;
    peek(): JsonToken;
    // private peekStack(): Object;
    // private popStack(): Object;
    promoteNameToValue(): void;
    skipValue(): void;
    toString(): string;
}