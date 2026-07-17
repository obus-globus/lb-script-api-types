import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { Property } from '../../../../../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
export class EnumProperty<T extends Enum<T> & StringRepresentable> extends Property<T> {
    static create<T extends Enum<T> & StringRepresentable>(paramname: string, paramclazz: Class<T>): EnumProperty<T>;
    static create<T extends Enum<T> & StringRepresentable>(paramname: string, paramclazz: Class<T>, ...paramvalues: T[]): EnumProperty<T>;
    static create<T extends Enum<T> & StringRepresentable>(paramname: string, paramclazz: Class<T>, paramvalues: T[]): EnumProperty<T>;
    static create<T extends Enum<T> & StringRepresentable>(paramname: string, paramclazz: Class<T>, paramfilter: (param0: T) => boolean): EnumProperty<T>;
    private constructor(name: string, clazz: Class<T>, values: T[])
    // private names: JavaMap<string, T>;
    // private ordinalToIndex: number[];
    // private values: T[];
    equals(o: Object | null): boolean;
    generateHashCode(): number;
    getInternalIndex(value: T): number;
    getName(): string;
    getName(value: T): string;
    getPossibleValues(): T[];
    getValue(name: string): Optional<T>;
}