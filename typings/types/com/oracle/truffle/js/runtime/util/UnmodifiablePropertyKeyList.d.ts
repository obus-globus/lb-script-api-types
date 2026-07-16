import type { Property } from '../../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class UnmodifiablePropertyKeyList<T extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static create<T extends unknown>(paramarray: Property[], paramstart: number, paramend: number): T[];
}