import type { Json } from '../../../../kotlinx/serialization/json/Json.d.ts'
import type { Composer } from '../../../../kotlinx/serialization/json/internal/Composer.d.ts'
import type { InternalJsonWriter } from '../../../../kotlinx/serialization/json/internal/InternalJsonWriter.d.ts'
export class ComposerWithPrettyPrint extends Composer {
    constructor(writer: InternalJsonWriter, json: Json)
    // private json: Json;
    // private level: number;
    indent(): void;
    nextItem(): void;
    nextItemIfNotFirst(): void;
    space(): void;
    unIndent(): void;
}