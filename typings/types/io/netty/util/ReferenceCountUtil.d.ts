import type { Object } from '../../../java/lang/Object.d.ts'
export class ReferenceCountUtil extends Object {
    static refCnt(paramarg0: Object): number;
    static release(paramarg0: Object): boolean;
    static release(paramarg0: Object, paramarg1: number): boolean;
    static releaseLater<T extends unknown>(paramarg0: T): T;
    static releaseLater<T extends unknown>(paramarg0: T, paramarg1: number): T;
    static retain<T extends unknown>(paramarg0: T): T;
    static retain<T extends unknown>(paramarg0: T, paramarg1: number): T;
    static safeRelease(paramarg0: Object): void;
    static safeRelease(paramarg0: Object, paramarg1: number): void;
    static touch<T extends unknown>(paramarg0: T): T;
    static touch<T extends unknown>(paramarg0: T, paramarg1: Object): T;
    private constructor()
}