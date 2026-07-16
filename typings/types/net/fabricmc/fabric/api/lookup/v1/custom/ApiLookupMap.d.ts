import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ApiLookupMap$LookupConstructor } from '../../../../../../../net/fabricmc/fabric/api/lookup/v1/custom/ApiLookupMap$LookupConstructor.d.ts'
import type { ApiLookupMap$LookupFactory } from '../../../../../../../net/fabricmc/fabric/api/lookup/v1/custom/ApiLookupMap$LookupFactory.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class ApiLookupMap<L extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static create<L extends unknown>(paramarg0: (param0: Identifier, param1: Class<Object>, param2: Class<Object>) => L): L[];
    static create<L extends unknown>(paramarg0: ApiLookupMap$LookupFactory<L>): L[];
}