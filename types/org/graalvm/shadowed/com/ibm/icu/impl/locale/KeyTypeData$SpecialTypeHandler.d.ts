import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export abstract class KeyTypeData$SpecialTypeHandler extends Object {
    private constructor()
    canonicalize(value: string): string;
    isWellFormed(value: string): boolean;
}