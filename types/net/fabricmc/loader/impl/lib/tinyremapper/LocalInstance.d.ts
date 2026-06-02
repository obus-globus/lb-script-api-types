import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TrLocal } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrLocal.d.ts'
import type { TrMethod } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrMethod.d.ts'
export class LocalInstance extends Object implements TrLocal {
    constructor(arg0: TrMethod, arg1: string, arg2: string, arg3: number)
    // private desc: string;
    readonly index: number;
    readonly name: string;
    // private owner: TrMethod;
    getIndex(): number;
    getName(): string;
}