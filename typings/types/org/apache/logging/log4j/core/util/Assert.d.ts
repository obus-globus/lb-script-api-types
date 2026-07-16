import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Assert extends Object {
    static isEmpty(paramo: Object): boolean;
    static isNonEmpty(paramo: Object): boolean;
    static requireNonEmpty<T extends unknown>(paramvalue: T): T;
    static requireNonEmpty<T extends unknown>(paramvalue: T, parammessage: string): T;
    static valueIsAtLeast(paramvalue: number, paramminValue: number): number;
    private constructor()
}