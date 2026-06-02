import type { OpticFinder } from '../../../../../com/mojang/datafixers/OpticFinder.d.ts'
import type { Typed } from '../../../../../com/mojang/datafixers/Typed.d.ts'
import type { Schema } from '../../../../../com/mojang/datafixers/schemas/Schema.d.ts'
import type { Type } from '../../../../../com/mojang/datafixers/types/Type.d.ts'
import type { Pair } from '../../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Dynamic } from '../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PackedBitStorage } from '../../../../../net/minecraft/util/datafix/PackedBitStorage.d.ts'
export abstract class LeavesFix$Section extends Object {
    constructor(section: Typed<Object>, inputSchema: Schema)
    // private blockStateType: Type<Pair<string, Dynamic<Object>>>;
    // private index: number;
    // private palette: Dynamic<Object>[];
    // private paletteFinder: OpticFinder<Pair<string, Dynamic<Object>>[]>;
    // private storage: PackedBitStorage;
    getBlock(pos: number): number;
    getIndex(): number;
    getStateId(blockName: string, persistent: boolean, distance: number): number;
    isSkippable(): boolean;
    readStorage(tag: Dynamic<Object>): void;
    skippable(): boolean;
    write(section: Typed<Object>): Typed<Object>;
}