import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Location$LocationVisitor extends Object{
    visitObjectArray(index: number, count: number): void;
    visitObjectField(index: number, count: number): void;
    visitPrimitiveArray(index: number, count: number): void;
    visitPrimitiveField(index: number, count: number): void;
}