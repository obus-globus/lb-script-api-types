import type { ReferenceCounted } from '../../../../io/netty/util/ReferenceCounted.d.ts'
import type { ReferenceCountUpdater$UpdaterType } from '../../../../io/netty/util/internal/ReferenceCountUpdater$UpdaterType.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class ReferenceCountUpdater<T extends ReferenceCounted> extends Object {
    static getUnsafeOffset(paramarg0: Class<Object>, paramarg1: string): number;
    static updaterTypeOf(paramarg0: Class<Object>, paramarg1: string): ReferenceCountUpdater$UpdaterType;
    constructor()
    casRawRefCnt(arg0: T, arg1: number, arg2: number): boolean;
    getAcquireRawRefCnt(arg0: T): number;
    getAndAddRawRefCnt(arg0: T, arg1: number): number;
    getRawRefCnt(arg0: T): number;
    initialValue(): number;
    isLiveNonVolatile(arg0: T): boolean;
    // private nonFinalRelease0(arg0: T, arg1: number, arg2: number, arg3: number): boolean;
    refCnt(arg0: T): number;
    release(arg0: T): boolean;
    release(arg0: T, arg1: number): boolean;
    resetRefCnt(arg0: T): void;
    retain(arg0: T): T;
    retain(arg0: T, arg1: number): T;
    // private retain0(arg0: T, arg1: number, arg2: number): T;
    // private retryRelease0(arg0: T, arg1: number): boolean;
    safeInitializeRawRefCnt(arg0: T, arg1: number): void;
    setInitialValue(arg0: T): void;
    setRefCnt(arg0: T, arg1: number): void;
    setReleaseRawRefCnt(arg0: T, arg1: number): void;
    // private tryFinalRelease0(arg0: T, arg1: number): boolean;
}