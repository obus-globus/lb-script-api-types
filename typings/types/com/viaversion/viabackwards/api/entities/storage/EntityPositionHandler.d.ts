import type { EntityPositionStorage } from '../../../../../../com/viaversion/viabackwards/api/entities/storage/EntityPositionStorage.d.ts'
import type { EntityRewriterBase } from '../../../../../../com/viaversion/viabackwards/api/rewriters/EntityRewriterBase.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class EntityPositionHandler extends Object {
    static RELATIVE_MOVE_FACTOR: number;
    static writeFacingAngles(paramarg0: PacketWrapper, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): void;
    static writeFacingDegrees(paramarg0: PacketWrapper, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): void;
    constructor(arg0: EntityRewriterBase<any, any>, arg1: Class<EntityPositionStorage>, arg2: () => EntityPositionStorage)
    // private entityRewriter: EntityRewriterBase<any, any>;
    // private storageClass: Class<EntityPositionStorage>;
    // private storageSupplier: () => EntityPositionStorage;
    cacheEntityPosition(arg0: PacketWrapper, arg1: boolean, arg2: boolean): void;
    cacheEntityPosition(arg0: PacketWrapper, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: boolean): void;
    cacheEntityPosition(arg0: PacketWrapper, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean, arg6: boolean): void;
    getStorage(arg0: UserConnection, arg1: number): EntityPositionStorage;
}