import type { Accessor$RuntimeSupport } from '../../../../com/oracle/truffle/api/impl/Accessor$RuntimeSupport.d.ts'
import type { TVMCI } from '../../../../com/oracle/truffle/api/impl/TVMCI.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OptimizedTVMCI extends TVMCI {
    constructor()
    createRuntimeSupport(permission: Object): Accessor$RuntimeSupport;
}