import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class StackValue extends Object {
    static get(paramsize: number): Object | null;
    static get(paramnumberOfElements: number, paramelementSize: number): Object | null;
    static get(paramnumberOfElements: number, paramstructType: Class<Object>): Object | null;
    static get(paramstructType: Class<Object>): Object | null;
    private constructor()
}