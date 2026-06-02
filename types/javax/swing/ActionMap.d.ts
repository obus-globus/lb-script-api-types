import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Action } from '../../javax/swing/Action.d.ts'
import type { ArrayTable } from '../../javax/swing/ArrayTable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class ActionMap extends Object implements Serializable {
    constructor()
    // private arrayTable: ArrayTable;
    readonly parent: ActionMap;
    allKeys(): Object[];
    clear(): void;
    get(arg0: Object): Action;
    getParent(): ActionMap;
    keys(): Object[];
    put(arg0: Object, arg1: Action): void;
    // private readObject(arg0: ObjectInputStream): void;
    remove(arg0: Object): void;
    setParent(arg0: ActionMap): void;
    size(): number;
    // private writeObject(arg0: ObjectOutputStream): void;
}