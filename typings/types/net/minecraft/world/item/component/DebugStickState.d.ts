import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { Property } from '../../../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
export class DebugStickState extends Record {
    static CODEC: Codec<DebugStickState>;
    static EMPTY: DebugStickState;
    constructor(properties: Map<Holder<Block>, Property<any>>)
    // private properties: Map<Holder<Block>, Property<any>>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    properties(): Map<Holder<Block>, Property<any>>;
    toString(): string;
    withProperty(block: Holder<Block>, property: Property<any>): DebugStickState;
}