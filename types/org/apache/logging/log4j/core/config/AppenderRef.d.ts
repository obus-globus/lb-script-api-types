import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Level } from '../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { Filter } from '../../../../../../org/apache/logging/log4j/core/Filter.d.ts'
export class AppenderRef extends Object {
    static createAppenderRef(paramref: string, paramlevel: Level, paramfilter: Filter): AppenderRef;
    private constructor(ref: string, level: Level, filter: Filter)
    readonly filter: Filter;
    readonly level: Level;
    readonly ref: string;
    getFilter(): Filter;
    getLevel(): Level;
    getRef(): string;
    toString(): string;
}