import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Source } from '../../../../../kotlinx/io/Source.d.ts'
export class InputKt extends Object {
    static getEndOfInput(paramarg0: Source): boolean;
    static readAvailable(self: Source, buffer: number[], offset: number, length: number): number;
}