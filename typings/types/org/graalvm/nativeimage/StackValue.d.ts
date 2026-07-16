import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBase } from '../../../org/graalvm/word/PointerBase.d.ts'
export class StackValue extends Object {
    static get<T extends PointerBase>(paramsize: number): T;
    static get<T extends PointerBase>(paramnumberOfElements: number, paramelementSize: number): T;
    static get<T extends PointerBase>(paramnumberOfElements: number, paramstructType: Class<T>): T;
    static get<T extends PointerBase>(paramstructType: Class<T>): T;
    private constructor()
}