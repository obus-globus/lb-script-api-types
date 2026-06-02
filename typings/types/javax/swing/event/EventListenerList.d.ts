import type { ObjectInputStream } from '../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class EventListenerList extends Object implements Serializable {
    constructor()
    listenerList: Object[];
    add<T extends EventListener>(arg0: Class<T>, arg1: T): void;
    getListenerCount(): number;
    getListenerCount(arg0: Class<Object>): number;
    // private getListenerCount(arg0: Object[], arg1: Class<Object>): number;
    getListenerList(): Object[];
    getListeners(arg0: Class<T>): T[];
    // private readObject(arg0: ObjectInputStream): void;
    remove<T extends EventListener>(arg0: Class<T>, arg1: T): void;
    toString(): string;
    // private writeObject(arg0: ObjectOutputStream): void;
}