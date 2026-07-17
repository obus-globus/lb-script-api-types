import type { JavaMap } from '../../../JavaMap.d.ts'
import type { UnaryOperator } from '../../../java/util/function/UnaryOperator.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
import type { Stopwatch } from '../../../net/minecraft/world/Stopwatch.d.ts'
import type { SavedData } from '../../../net/minecraft/world/level/saveddata/SavedData.d.ts'
import type { SavedDataType } from '../../../net/minecraft/world/level/saveddata/SavedDataType.d.ts'
export class Stopwatches extends SavedData {
    static TYPE: SavedDataType<Stopwatches>;
    static currentTime(): number;
    private constructor()
    // private stopwatches: JavaMap<Identifier, Stopwatch>;
    add(id: Identifier, stopwatch: Stopwatch): boolean;
    get(id: Identifier): Stopwatch;
    ids(): Identifier[];
    isDirty(): boolean;
    // private pack(): JavaMap<Identifier, number>;
    remove(id: Identifier): boolean;
    update(id: Identifier, update: (param0: Stopwatch) => Stopwatch): boolean;
}