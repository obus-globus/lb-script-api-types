import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class MapEntry extends Object {
    constructor(key: string, value: string)
    readonly key: string;
    readonly value: string;
    equals(obj: Object | null): boolean;
    getKey(): string;
    getValue(): string;
    hashCode(): number;
    setKey(key: string): void;
    setValue(value: string): void;
    toString(): string;
}