import type { Object } from '../../../../java/lang/Object.d.ts'
export class KeyMappings extends Object {
    constructor(arg0: T[])
    constructor(arg0: string[])
    constructor(arg0: E[])
    // private keyToId: Object2IntMap<string>;
    // private keys: string[];
    idToKey(arg0: number): string;
    keyToId(arg0: string): number;
    keys(): string[];
    size(): number;
}