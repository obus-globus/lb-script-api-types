import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DiscordActivity$Button extends Record {
    constructor(label: string, url: string)
    // private label: string;
    /*not mapped: */ label(): string;
    // private url: string;
    /*not mapped: */ url(): string;
    component1(): string;
    component2(): string;
    copy(label: string, url: string): DiscordActivity$Button;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}