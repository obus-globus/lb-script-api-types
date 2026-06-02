import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Modules extends Object {
    static copyModule(paramarg0: Class<Object>, paramarg1: Class<Object>): void;
    static enableNativeAccess(paramarg0: Class<Object>): void;
    static enableNativeAccessToAllUnnamed(): void;
    static openBootModule(): void;
    static openEntireModule(paramarg0: Class<Object>): void;
    static openModule(paramarg0: Class<Object>): void;
    static openModule(paramarg0: Class<Object>, paramarg1: string): void;
    constructor()
}