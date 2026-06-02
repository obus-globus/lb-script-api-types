import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { EventObject } from '../../java/util/EventObject.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Notification extends EventObject {
    constructor(arg0: string, arg1: Object, arg2: number)
    constructor(arg0: string, arg1: Object, arg2: number, arg3: number)
    constructor(arg0: string, arg1: Object, arg2: number, arg3: number, arg4: string)
    constructor(arg0: string, arg1: Object, arg2: number, arg3: string)
    readonly message: string;
    readonly sequenceNumber: number;
    source: Object;
    readonly timeStamp: number;
    readonly type: string;
    readonly userData: Object;
    getMessage(): string;
    getSequenceNumber(): number;
    getTimeStamp(): number;
    getType(): string;
    getUserData(): Object;
    // private readObject(arg0: ObjectInputStream): void;
    setSequenceNumber(arg0: number): void;
    setSource(arg0: Object): void;
    setTimeStamp(arg0: number): void;
    setUserData(arg0: Object): void;
    toString(): string;
    // private writeObject(arg0: ObjectOutputStream): void;
}