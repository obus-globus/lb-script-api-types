import type { JSHashMap$Cursor } from '../../../../../../com/oracle/truffle/js/runtime/util/JSHashMap$Cursor.d.ts'
import type { JSHashMap$Node } from '../../../../../../com/oracle/truffle/js/runtime/util/JSHashMap$Node.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSHashMap extends Object {
    constructor()
    // private head: JSHashMap$Node;
    // private map: Map<Object, JSHashMap$Node>;
    // private tail: JSHashMap$Node;
    clear(): void;
    copy(): JSHashMap;
    get(key: Object): Object;
    getEntries(): JSHashMap$Cursor;
    getOrInsert(key: Object, value: Object): Object;
    has(key: Object): boolean;
    put(key: Object, value: Object): void;
    remove(key: Object): boolean;
    size(): number;
    toString(): string;
    // private unlink(node: JSHashMap$Node): void;
}