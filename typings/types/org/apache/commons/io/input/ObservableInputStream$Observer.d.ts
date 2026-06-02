import type { IOException } from '../../../../../java/io/IOException.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ObservableInputStream$Observer extends Object {
    constructor()
    closed(): void;
    data(arg0: number[], arg1: number, arg2: number): void;
    data(arg0: number): void;
    error(arg0: IOException): void;
    finished(): void;
}