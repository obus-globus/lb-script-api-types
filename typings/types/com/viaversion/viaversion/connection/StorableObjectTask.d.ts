import type { StorableObject } from '../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { UserConnection } from '../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class StorableObjectTask<T extends StorableObject> extends Object implements Runnable {
    constructor(arg0: Class<T>)
    // private storableObject: Class<T>;
    run(): void;
    run(arg0: UserConnection, arg1: T): void;
}