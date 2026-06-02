import type { Equivalence } from '../../../../com/google/common/base/Equivalence.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Equivalence$Equals extends Equivalence<Object> implements Serializable {
    static equals(): Equivalence<Object>;
    static identity(): Equivalence<Object>;
    constructor()
    doEquivalent(a: Object, b: Object): boolean;
    doHash(o: Object): number;
    // private readResolve(): Object;
}