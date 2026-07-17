import type { LayoutImpl } from '../../../../../com/oracle/truffle/api/object/LayoutImpl.d.ts'
import type { Location } from '../../../../../com/oracle/truffle/api/object/Location.d.ts'
import type { Property } from '../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Obsolescence extends Object {
    static isLocationCompatible(paramlayout: LayoutImpl, paramthisLoc: Location, paramotherLoc: Location): boolean;
    static isRelatedByUpcast(paramthiz: Shape, paramother: Shape): boolean;
    static markObsolete(paramoldShape: Shape, paramobsoletedBy: Shape, paramoldProperty: Property, paramnewProperty: Property): void;
    static tryObsoleteDowncast(paramthiz: Shape, paramother: Shape): Shape;
    private constructor()
}