import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBase } from '../../../org/graalvm/word/PointerBase.d.ts'
export class StackValue extends Object {
    static get(paramsize: number): PointerBase | null;
    static get(paramnumberOfElements: number, paramelementSize: number): PointerBase | null;
    static get(paramnumberOfElements: number, paramstructType: Class<PointerBase>): PointerBase | null;
    static get(paramstructType: Class<PointerBase>): PointerBase | null;
    private constructor()
}