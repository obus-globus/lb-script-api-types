import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { StringTag } from '../../../../com/viaversion/nbt/tag/StringTag.d.ts'
import type { Key } from '../../../../com/viaversion/viaversion/util/Key.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class KeyMappings extends Object {
    constructor(arg0: StringTag[])
    constructor(...arg0: Key[])
    constructor(...arg0: string[])
    // private keyToId: JavaMap<any, any>;
    // private keys: Key[];
    idToKey(arg0: number): string;
    key(arg0: number): Key;
    keyToId(arg0: string): number;
    keys(): Key[];
    size(): number;
}