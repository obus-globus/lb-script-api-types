import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ImageSingletons extends Object {
    static add<T extends unknown>(paramkey: Class<T>, paramvalue: T): void;
    static contains(paramkey: Class<Object>): boolean;
    static lookup<T extends unknown>(paramkey: Class<T>): T;
    private constructor()
}