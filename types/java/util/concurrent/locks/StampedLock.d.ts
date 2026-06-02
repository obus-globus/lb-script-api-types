import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Lock } from '../../../../java/util/concurrent/locks/Lock.d.ts'
import type { ReadWriteLock } from '../../../../java/util/concurrent/locks/ReadWriteLock.d.ts'
import type { StampedLock$Node } from '../../../../java/util/concurrent/locks/StampedLock$Node.d.ts'
import type { StampedLock$ReadLockView } from '../../../../java/util/concurrent/locks/StampedLock$ReadLockView.d.ts'
import type { StampedLock$ReadWriteLockView } from '../../../../java/util/concurrent/locks/StampedLock$ReadWriteLockView.d.ts'
import type { StampedLock$ReaderNode } from '../../../../java/util/concurrent/locks/StampedLock$ReaderNode.d.ts'
import type { StampedLock$WriteLockView } from '../../../../java/util/concurrent/locks/StampedLock$WriteLockView.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class StampedLock extends Object implements Serializable {
    static isLockStamp(paramarg0: number): boolean;
    static isOptimisticReadStamp(paramarg0: number): boolean;
    static isReadLockStamp(paramarg0: number): boolean;
    static isWriteLockStamp(paramarg0: number): boolean;
    constructor()
    // private head: StampedLock$Node;
    // private readLockView: StampedLock$ReadLockView;
    // private readWriteLockView: StampedLock$ReadWriteLockView;
    // private readerOverflow: number;
    // private state: number;
    // private tail: StampedLock$Node;
    // private writeLockView: StampedLock$WriteLockView;
    // private acquireRead(arg0: boolean, arg1: boolean, arg2: number): number;
    // private acquireWrite(arg0: boolean, arg1: boolean, arg2: number): number;
    asReadLock(): Lock;
    asReadWriteLock(): ReadWriteLock;
    asWriteLock(): Lock;
    // private cancelAcquire(arg0: StampedLock$Node): void;
    // private cancelCowaiter(arg0: StampedLock$ReaderNode, arg1: StampedLock$ReaderNode): void;
    // private casState(arg0: number, arg1: number): boolean;
    // private casTail(arg0: StampedLock$Node, arg1: StampedLock$Node): boolean;
    // private cleanQueue(): void;
    getReadLockCount(): number;
    // private getReadLockCount(arg0: number): number;
    isReadLocked(): boolean;
    isWriteLocked(): boolean;
    readLock(): number;
    readLockInterruptibly(): number;
    // private readObject(arg0: ObjectInputStream): void;
    // private releaseWrite(arg0: number): number;
    // private spinLockOnOOME(arg0: boolean, arg1: boolean, arg2: boolean, arg3: number): number;
    toString(): string;
    // private tryAcquireRead(): number;
    // private tryAcquireWrite(): number;
    tryConvertToOptimisticRead(arg0: number): number;
    tryConvertToReadLock(arg0: number): number;
    tryConvertToWriteLock(arg0: number): number;
    // private tryDecReaderOverflow(arg0: number): number;
    // private tryIncReaderOverflow(arg0: number): number;
    // private tryInitializeHead(arg0: StampedLock$Node): void;
    tryOptimisticRead(): number;
    tryReadLock(): number;
    tryReadLock(arg0: number, arg1: TimeUnit): number;
    tryUnlockRead(): boolean;
    tryUnlockWrite(): boolean;
    tryWriteLock(): number;
    tryWriteLock(arg0: number, arg1: TimeUnit): number;
    // private unlinkCowaiter(arg0: StampedLock$ReaderNode, arg1: StampedLock$ReaderNode): void;
    unlock(arg0: number): void;
    unlockRead(arg0: number): void;
    unlockWrite(arg0: number): void;
    unstampedUnlockRead(): void;
    unstampedUnlockWrite(): void;
    validate(arg0: number): boolean;
    writeLock(): number;
    writeLockInterruptibly(): number;
}