import type { DynamicOps } from '../../../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStackTemplate } from '../../../../../../net/minecraft/world/item/ItemStackTemplate.d.ts'
export class HoverNode$LazyItemStackNodeContent<T extends Object | number | string | boolean> extends Record {
    // private componentMap: T;
    // private count: number;
    // private identifier: Identifier;
    // private ops: DynamicOps<T>;
    componentMap(): T;
    count(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    identifier(): Identifier;
    ops(): DynamicOps<T>;
    toString(): string;
    toVanilla(arg0: HolderLookup$Provider): ItemStackTemplate;
}