import type { ImmutableStringReader } from '../../../../com/mojang/brigadier/ImmutableStringReader.d.ts'
import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { DynamicOps } from '../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ResourceOrIdArgument$Result } from '../../../../net/minecraft/commands/arguments/ResourceOrIdArgument$Result.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { HolderLookup$Provider } from '../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { HolderLookup$RegistryLookup } from '../../../../net/minecraft/core/HolderLookup$RegistryLookup.d.ts'
export class ResourceOrIdArgument$InlineResult<T extends unknown, O extends unknown> extends Record implements ResourceOrIdArgument$Result<T, O> {
    constructor(value: O)
    // private value: O;
    equals(o: Object | null): boolean;
    hashCode(): number;
    parse(reader: ImmutableStringReader, lookup: HolderLookup$Provider, ops: DynamicOps<O>, codec: Codec<T>, elementLookup: HolderLookup$RegistryLookup<T>): Holder<T>;
    toString(): string;
    value(): O;
}