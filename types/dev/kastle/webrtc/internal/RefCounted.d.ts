import type { Object } from '../../../../java/lang/Object.d.ts'
export interface RefCounted extends Object{
    release(): void;
    retain(): void;
}