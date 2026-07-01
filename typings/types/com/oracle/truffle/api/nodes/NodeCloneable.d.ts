import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export abstract class NodeCloneable extends Object implements Cloneable {
    constructor()
    clone(): Object;
}