import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Assert extends Object {
    static isEmpty(paramo: Object): boolean;
    static isNonEmpty(paramo: Object): boolean;
    static requireNonEmpty(paramvalue: Object | null): Object | null;
    static requireNonEmpty(paramvalue: Object | null, parammessage: string): Object | null;
    static valueIsAtLeast(paramvalue: number, paramminValue: number): number;
    private constructor()
}