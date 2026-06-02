import type { Object } from '../../../java/lang/Object.d.ts'
export interface ReferenceCounted extends Object{
    refCnt(): number;
    release(): boolean;
    release(arg0: number): boolean;
    retain(): ReferenceCounted;
    retain(arg0: number): ReferenceCounted;
    touch(): ReferenceCounted;
    touch(arg0: Object): ReferenceCounted;
}