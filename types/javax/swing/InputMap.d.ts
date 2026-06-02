import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { ArrayTable } from '../../javax/swing/ArrayTable.d.ts'
import type { KeyStroke } from '../../javax/swing/KeyStroke.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class InputMap extends Object implements Serializable {
    constructor()
    // private arrayTable: ArrayTable;
    readonly parent: InputMap;
    allKeys(): KeyStroke[];
    clear(): void;
    get(arg0: KeyStroke): Object;
    getParent(): InputMap;
    keys(): KeyStroke[];
    put(arg0: KeyStroke, arg1: Object): void;
    // private readObject(arg0: ObjectInputStream): void;
    remove(arg0: KeyStroke): void;
    setParent(arg0: InputMap): void;
    size(): number;
    // private writeObject(arg0: ObjectOutputStream): void;
}