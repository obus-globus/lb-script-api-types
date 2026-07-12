import type { StringTag } from '../../../../com/viaversion/nbt/tag/StringTag.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class KeyMappings extends Object {
    constructor(arg0: StringTag[])
    constructor(...arg0: string[])
    constructor(arg0: string[])
    // private keyToId: { [key: string]: any };
    // private keys: string[];
    idToKey(arg0: number): string;
    keyToId(arg0: string): number;
    keys(): string[];
    size(): number;
}