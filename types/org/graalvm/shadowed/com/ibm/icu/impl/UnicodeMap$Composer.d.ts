import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class UnicodeMap$Composer<T extends Object | number | string | boolean> extends Object {
    constructor()
    compose(codePoint: number, string: string, a: T, b: T): T;
}