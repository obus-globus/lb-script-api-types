import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class CapeInfo extends Record {
    constructor(id: string, state: string, url: string, alias: string)
    // private alias: string;
    /*not mapped: */ alias(): string;
    // private id: string;
    /*not mapped: */ id(): string;
    // private state: string;
    /*not mapped: */ state(): string;
    // private url: string;
    /*not mapped: */ url(): string;
    component1(): string;
    component2(): string;
    component3(): string;
    component4(): string;
    copy(id: string, state: string, url: string, alias: string): CapeInfo;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}