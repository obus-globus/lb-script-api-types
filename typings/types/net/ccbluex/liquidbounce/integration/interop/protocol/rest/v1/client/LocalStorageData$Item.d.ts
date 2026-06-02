import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
export class LocalStorageData$Item extends Object {
    constructor(key: string, value: string)
    readonly key: string;
    readonly value: string;
    component1(): string;
    component2(): string;
    copy(key: string, value: string): LocalStorageData$Item;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}