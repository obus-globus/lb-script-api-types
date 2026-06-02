import type { Composer } from '../../../../kotlinx/serialization/json/internal/Composer.d.ts'
import type { InternalJsonWriter } from '../../../../kotlinx/serialization/json/internal/InternalJsonWriter.d.ts'
export class ComposerForUnquotedLiterals extends Composer {
    constructor(writer: InternalJsonWriter, forceQuoting: boolean)
    // private forceQuoting: boolean;
    printQuoted(value: string): void;
}