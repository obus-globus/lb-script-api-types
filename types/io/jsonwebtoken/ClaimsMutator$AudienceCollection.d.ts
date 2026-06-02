import type { NestedCollection } from '../../io/jsonwebtoken/lang/NestedCollection.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface ClaimsMutator$AudienceCollection<P extends Object | number | string | boolean> extends NestedCollection<string, P>, Object{
    single(arg0: string): P;
}