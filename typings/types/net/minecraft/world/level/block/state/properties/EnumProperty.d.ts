import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { Property } from '../../../../../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
export class EnumProperty<T extends Enum<T> & StringRepresentable> extends Property<T> {
    static create(paramname: string, paramclazz: Class<Object>): EnumProperty<Object>;
    static create(paramname: string, paramclazz: Class<Object>, paramvalues: Object | null): EnumProperty<Object>;
    static create(paramname: string, paramclazz: Class<Object>, paramvalues: (Object | null)[]): EnumProperty<Object>;
    static create(paramname: string, paramclazz: Class<Object>, paramfilter: (param0: Object | null) => kotlin.Boolean): EnumProperty<Object>;
    private constructor(name: string, clazz: Class<T>, values: T[])
    // private names: { [key: string]: T };
    // private ordinalToIndex: number[];
    // private values: T[];
    equals(o: Object | null): boolean;
    generateHashCode(): number;
    getInternalIndex(value: T): number;
    getName(value: T): string;
    getPossibleValues(): T[];
    getValue(name: string): Optional<T>;
}