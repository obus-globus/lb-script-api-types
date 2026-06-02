import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Mappings extends Object{
    contains(arg0: number): boolean;
    getNewId(arg0: number): number;
    getNewIdOrDefault(arg0: number, arg1: number): number;
    inverse(): Mappings;
    isIdentity(): boolean;
    mappedSize(): number;
    setNewId(arg0: number, arg1: number): void;
    size(): number;
}