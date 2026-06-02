import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { DataResult } from '../../../../../../../com/mojang/serialization/DataResult.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../java/lang/Comparable.d.ts'
import type { KeyValueCondition$Term } from '../../../../../../../net/minecraft/client/renderer/block/dispatch/multipart/KeyValueCondition$Term.d.ts'
import type { Property } from '../../../../../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
export class KeyValueCondition$Terms extends Record {
    static CODEC: Codec<KeyValueCondition$Terms>;
    static parse(paramvalue: string): DataResult<KeyValueCondition$Terms>;
    constructor(entries: KeyValueCondition$Term[])
    // private entries: KeyValueCondition$Term[];
    entries(): KeyValueCondition$Term[];
    equals(o: Object | null): boolean;
    // private getValueOrThrow<T extends Comparable<T>>(owner: Object, property: Property<T>, input: string): T;
    hashCode(): number;
    instantiate<O extends Object | number | string | boolean>(owner: O, property: Property<T>): (param0: S) => kotlin.Boolean;
    // private instantiate(owner: Object, property: Property<T>, term: KeyValueCondition$Term): (param0: T) => kotlin.Boolean;
    toString(): string;
}