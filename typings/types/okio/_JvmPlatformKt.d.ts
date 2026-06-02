import type { ReentrantLock } from '../java/util/concurrent/locks/ReentrantLock.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Function0 } from '../kotlin/jvm/functions/Function0.d.ts'
export class _JvmPlatformKt extends Object {
    static asUtf8ToByteArray(paramarg0: string): number[];
    static newLock(): ReentrantLock;
    static toUtf8String(paramarg0: number[]): string;
    static withLock(paramarg0: ReentrantLock, paramarg1: Function0<Object>): Object | null;
}