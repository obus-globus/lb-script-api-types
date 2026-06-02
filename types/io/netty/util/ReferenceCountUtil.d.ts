import type { Object } from '../../../java/lang/Object.d.ts'
export class ReferenceCountUtil extends Object {
    static refCnt(paramarg0: Object): number;
    static release(paramarg0: Object): boolean;
    static release(paramarg0: Object, paramarg1: number): boolean;
    static releaseLater(paramarg0: Object | null): Object | null;
    static releaseLater(paramarg0: Object | null, paramarg1: number): Object | null;
    static retain(paramarg0: Object | null): Object | null;
    static retain(paramarg0: Object | null, paramarg1: number): Object | null;
    static safeRelease(paramarg0: Object): void;
    static safeRelease(paramarg0: Object, paramarg1: number): void;
    static touch(paramarg0: Object | null): Object | null;
    static touch(paramarg0: Object | null, paramarg1: Object): Object | null;
    private constructor()
}