import type { Property } from '../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DynamicObject$PutAllNode$PutAllPlan extends Record {
    constructor(newShape: Shape, oldProperties: Property[], newProperties: Property[])
    // private newProperties: Property[];
    // private newShape: Shape;
    // private oldProperties: Property[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    newProperties(): Property[];
    newShape(): Shape;
    oldProperties(): Property[];
    toString(): string;
}