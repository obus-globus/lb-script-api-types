import type { Object } from '../../../java/lang/Object.d.ts'
export class HeaderValueParam extends Object {
    constructor(name: string, value: string)
    constructor(name: string, value: string, escapeValue: boolean)
    readonly escapeValue: boolean;
    readonly name: string;
    readonly value: string;
    component1(): string;
    component2(): string;
    component3(): boolean;
    copy(name: string, value: string, escapeValue: boolean): HeaderValueParam;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}