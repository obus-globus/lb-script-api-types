import type { MapCodec } from '../../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../../../java/lang/Number.d.ts'
import type { NbtPathArgument$NbtPath } from '../../../../../../../../net/minecraft/commands/arguments/NbtPathArgument$NbtPath.d.ts'
import type { Identifier } from '../../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { LootContext } from '../../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { NumberProvider } from '../../../../../../../../net/minecraft/world/level/storage/loot/providers/number/NumberProvider.d.ts'
export class StorageValue extends Record implements NumberProvider {
    static MAP_CODEC: MapCodec<StorageValue>;
    constructor(storage: Identifier, path: NbtPathArgument$NbtPath)
    // private path: NbtPathArgument$NbtPath;
    // private storage: Identifier;
    codec(): MapCodec<StorageValue>;
    equals(o: Object | null): boolean;
    getFloat(context: LootContext): number;
    getInt(context: LootContext): number;
    getInt(context: LootContext): number;
    // private getNumericTag(context: LootContext, _default: Number): Number;
    hashCode(): number;
    path(): NbtPathArgument$NbtPath;
    storage(): Identifier;
    toString(): string;
}