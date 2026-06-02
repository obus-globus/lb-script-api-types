import type { LayoutImpl } from '../../../../../com/oracle/truffle/api/object/LayoutImpl.d.ts'
import type { Location } from '../../../../../com/oracle/truffle/api/object/Location.d.ts'
import type { Property } from '../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { ShapeImpl } from '../../../../../com/oracle/truffle/api/object/ShapeImpl.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Obsolescence extends Object {
    static isLocationCompatible(paramlayout: LayoutImpl, paramthisLoc: Location, paramotherLoc: Location): boolean;
    static isRelatedByUpcast(paramthiz: ShapeImpl, paramother: ShapeImpl): boolean;
    static markObsolete(paramoldShape: ShapeImpl, paramobsoletedBy: ShapeImpl, paramoldProperty: Property, paramnewProperty: Property): void;
    static tryObsoleteDowncast(paramthiz: ShapeImpl, paramother: ShapeImpl): ShapeImpl;
    private constructor()
}