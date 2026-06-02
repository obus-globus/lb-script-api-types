import type { ObjectInputStream$ValidationList$Callback } from '../../java/io/ObjectInputStream$ValidationList$Callback.d.ts'
import type { ObjectInputValidation } from '../../java/io/ObjectInputValidation.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class ObjectInputStream$ValidationList extends Object {
    constructor()
    // private list: ObjectInputStream$ValidationList$Callback;
    clear(): void;
    doCallbacks(): void;
    register(arg0: ObjectInputValidation, arg1: number): void;
}