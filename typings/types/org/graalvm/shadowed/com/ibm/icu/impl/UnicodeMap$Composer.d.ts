import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class UnicodeMap$Composer<T extends unknown> extends Object {
    constructor()
    compose(codePoint: number, string: string, a: T, b: T): T;
}