import type { ObjectInputStream } from '../../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../../java/lang/ClassLoader.d.ts'
import type { InvocationHandler } from '../../../../../java/lang/reflect/InvocationHandler.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class EventListenerSupport<L extends Object | number | string | boolean> extends Object implements Serializable {
    static create(paramarg0: Class<Object>): EventListenerSupport<Object>;
    private constructor()
    constructor(arg0: Class<L>)
    constructor(arg0: Class<L>, arg1: ClassLoader)
    readonly listeners: L[];
    // private prototypeArray: L[];
    // private proxy: L;
    addListener(arg0: L): void;
    addListener(arg0: L, arg1: boolean): void;
    createInvocationHandler(): InvocationHandler;
    // private createProxy(arg0: Class<L>, arg1: ClassLoader): void;
    fire(): L;
    getListenerCount(): number;
    getListeners(): L[];
    // private initializeTransientFields(arg0: Class<L>, arg1: ClassLoader): void;
    // private readObject(arg0: ObjectInputStream): void;
    removeListener(arg0: L): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}