import type { StorableObject } from '../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class WorldIdentifiers extends Record implements StorableObject {
    static END_DEFAULT: string;
    static NETHER_DEFAULT: string;
    static OVERWORLD_DEFAULT: string;
    constructor(arg0: string)
    constructor(overworld: string, nether: string, end: string)
    // private end: string;
    // private nether: string;
    // private overworld: string;
    end(): string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    nether(): string;
    onRemove(): void;
    overworld(): string;
    toString(): string;
}