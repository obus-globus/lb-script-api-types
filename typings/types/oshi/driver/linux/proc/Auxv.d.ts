import type { Object } from '../../../../java/lang/Object.d.ts'
export class Auxv extends Object {
    static AT_CLKTCK: number;
    static AT_HWCAP: number;
    static AT_PAGESZ: number;
    static queryAuxv(): { [key: number]: number };
    private constructor()
}