import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface StorableObject extends Object{
    onRemove(): void;
}