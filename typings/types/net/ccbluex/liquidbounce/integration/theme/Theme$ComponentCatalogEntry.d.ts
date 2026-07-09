import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Theme$ComponentCatalogEntry extends Object {
    constructor(name: string, description: string, id: string, singleton: boolean, canAdd: boolean)
    readonly canAdd: boolean;
    readonly description: string;
    readonly id: string;
    readonly name: string;
    readonly singleton: boolean;
    component1(): string;
    component2(): string;
    component3(): string;
    component4(): boolean;
    component5(): boolean;
    copy(name: string, description: string, id: string, singleton: boolean, canAdd: boolean): Theme$ComponentCatalogEntry;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}