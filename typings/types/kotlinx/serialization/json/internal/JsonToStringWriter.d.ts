import type { Object } from '../../../../java/lang/Object.d.ts'
import type { InternalJsonWriter } from '../../../../kotlinx/serialization/json/internal/InternalJsonWriter.d.ts'
import type { InternalJsonWriter$Companion } from '../../../../kotlinx/serialization/json/internal/InternalJsonWriter$Companion.d.ts'
export class JsonToStringWriter extends Object implements InternalJsonWriter {
    static Companion: InternalJsonWriter$Companion;
    constructor()
    // private array: string[];
    // private size: number;
    // private appendStringSlowPath(firstEscapedChar: number, currentSize: number, string: string): void;
    // private ensureAdditionalCapacity(expected: number): void;
    // private ensureTotalCapacity(oldSize: number, additional: number): number;
    release(): void;
    toString(): string;
    write(text: string): void;
    writeChar(char: string): void;
    writeLong(value: number): void;
    writeQuoted(text: string): void;
}