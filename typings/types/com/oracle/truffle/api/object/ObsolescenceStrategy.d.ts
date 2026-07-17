import type { Property } from '../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../org/graalvm/collections/Pair.d.ts'
export abstract class ObsolescenceStrategy extends Object {
    static diffToString(paramoldShape: Shape, paramnewShape: Shape): string;
    static findPropertyDifferences(paramoldShape: Shape, paramnewShape: Shape): Map<Object, Pair<Property, Property>>;
    private constructor()
}