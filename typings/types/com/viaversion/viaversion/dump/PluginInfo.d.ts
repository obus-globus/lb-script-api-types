import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PluginInfo extends Record {
    constructor(enabled: boolean, name: string, version: string, main: string, authors: string[])
    // private authors: string[];
    // private enabled: boolean;
    // private main: string;
    // private name: string;
    // private version: string;
    authors(): string[];
    enabled(): boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    main(): string;
    name(): string;
    toString(): string;
    version(): string;
}