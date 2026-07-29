import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DiscordActivity$Image extends Record {
    constructor(key: string, tooltip: string | null)
    // private key: string;
    /*not mapped: */ key(): string;
    // private tooltip: string | null;
    /*not mapped: */ tooltip(): string | null;
    component1(): string;
    component2(): string | null;
    copy(key: string, tooltip: string | null): DiscordActivity$Image;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}