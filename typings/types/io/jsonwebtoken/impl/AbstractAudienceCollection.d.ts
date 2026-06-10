import type { ClaimsMutator$AudienceCollection } from '../../../io/jsonwebtoken/ClaimsMutator$AudienceCollection.d.ts'
import type { DefaultNestedCollection } from '../../../io/jsonwebtoken/impl/lang/DefaultNestedCollection.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class AbstractAudienceCollection<P extends Object | number | string | boolean> extends DefaultNestedCollection<string, P> implements ClaimsMutator$AudienceCollection<P> {
    constructor(arg0: P, arg1: string[])
}