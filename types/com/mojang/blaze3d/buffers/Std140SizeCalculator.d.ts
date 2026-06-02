import type { Object } from '../../../../java/lang/Object.d.ts'
export class Std140SizeCalculator extends Object {
    constructor()
    // private size: number;
    align(alignment: number): Std140SizeCalculator;
    get(): number;
    putFloat(): Std140SizeCalculator;
    putIVec2(): Std140SizeCalculator;
    putIVec3(): Std140SizeCalculator;
    putIVec4(): Std140SizeCalculator;
    putInt(): Std140SizeCalculator;
    putMat4f(): Std140SizeCalculator;
    putVec2(): Std140SizeCalculator;
    putVec3(): Std140SizeCalculator;
    putVec4(): Std140SizeCalculator;
}