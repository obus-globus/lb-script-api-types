import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ConcatenatedFormatStructure } from '../../../../kotlinx/datetime/internal/format/ConcatenatedFormatStructure.d.ts'
import type { FormatStructure } from '../../../../kotlinx/datetime/internal/format/FormatStructure.d.ts'
import type { NonConcatenatedFormatStructure } from '../../../../kotlinx/datetime/internal/format/NonConcatenatedFormatStructure.d.ts'
export class AppendableFormatStructure<T extends Object | number | string | boolean> extends Object {
    constructor()
    // private list: NonConcatenatedFormatStructure<T>[];
    add(format: FormatStructure<T>): void;
    build(): ConcatenatedFormatStructure<T>;
}