import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Auxv extends Object {
    static AT_CLKTCK: number;
    static AT_HWCAP: number;
    static AT_PAGESZ: number;
    static queryAuxv(): JavaMap<number, number>;
    private constructor()
}