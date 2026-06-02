import type { Accessor$RuntimeSupport } from '../../../../../com/oracle/truffle/api/impl/Accessor$RuntimeSupport.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class TVMCI extends Object {
    constructor()
    // private checkCaller(): boolean;
    createRuntimeSupport(permission: Object): Accessor$RuntimeSupport;
}