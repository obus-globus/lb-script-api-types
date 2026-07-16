import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Unbox extends Object {
    static box(paramvalue: boolean): StringBuilder;
    static box(paramvalue: number): StringBuilder;
    static box(paramvalue: string): StringBuilder;
    private constructor()
}