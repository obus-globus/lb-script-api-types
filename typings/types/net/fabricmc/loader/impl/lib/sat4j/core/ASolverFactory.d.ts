import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ISolver } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/ISolver.d.ts'
export abstract class ASolverFactory<T extends ISolver> extends Object implements Serializable {
    constructor()
}