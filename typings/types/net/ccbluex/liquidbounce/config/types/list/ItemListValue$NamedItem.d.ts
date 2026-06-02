import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ItemListValue$NamedItem<T extends Object | number | string | boolean> extends Object {
    constructor(name: string, value: T, icon: string | null)
    readonly icon: string | null;
    readonly name: string;
    readonly value: T;
    component1(): string;
    component2(): T;
    component3(): string | null;
    copy(name: string, value: T, icon: string | null): ItemListValue$NamedItem<T>;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}