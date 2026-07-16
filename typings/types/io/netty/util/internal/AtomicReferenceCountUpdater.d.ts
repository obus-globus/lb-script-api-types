import type { ReferenceCounted } from '../../../../io/netty/util/ReferenceCounted.d.ts'
import type { ReferenceCountUpdater } from '../../../../io/netty/util/internal/ReferenceCountUpdater.d.ts'
import type { ReferenceCountUpdater$UpdaterType } from '../../../../io/netty/util/internal/ReferenceCountUpdater$UpdaterType.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { AtomicIntegerFieldUpdater } from '../../../../java/util/concurrent/atomic/AtomicIntegerFieldUpdater.d.ts'
export abstract class AtomicReferenceCountUpdater<T extends ReferenceCounted> extends ReferenceCountUpdater<T> {
    static getUnsafeOffset(paramarg0: Class<ReferenceCounted>, paramarg1: string): number;
    static updaterTypeOf<T extends ReferenceCounted>(paramarg0: Class<T>, paramarg1: string): ReferenceCountUpdater$UpdaterType;
    constructor()
    casRawRefCnt(arg0: T, arg1: number, arg2: number): boolean;
    getAcquireRawRefCnt(arg0: T): number;
    getAndAddRawRefCnt(arg0: T, arg1: number): number;
    getRawRefCnt(arg0: T): number;
    safeInitializeRawRefCnt(arg0: T, arg1: number): void;
    setReleaseRawRefCnt(arg0: T, arg1: number): void;
    updater(): AtomicIntegerFieldUpdater<T>;
}