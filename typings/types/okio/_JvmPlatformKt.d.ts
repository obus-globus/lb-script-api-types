import type { ReentrantLock } from '../java/util/concurrent/locks/ReentrantLock.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
export class _JvmPlatformKt extends Object {
    static asUtf8ToByteArray(self: string): number[];
    static newLock(): ReentrantLock;
    static toUtf8String(self: number[]): string;
    static withLock<T extends unknown>(self: ReentrantLock, action: () => T): T;
}