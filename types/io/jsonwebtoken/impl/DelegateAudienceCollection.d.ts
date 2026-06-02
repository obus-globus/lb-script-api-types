import type { ClaimsMutator$AudienceCollection } from '../../../io/jsonwebtoken/ClaimsMutator$AudienceCollection.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DelegateAudienceCollection<P extends Object | number | string | boolean> extends Object implements ClaimsMutator$AudienceCollection<P> {
    constructor(arg0: P, arg1: ClaimsMutator$AudienceCollection<Object>)
    // private delegate: ClaimsMutator$AudienceCollection<Object>;
    // private parent: P;
    add(arg0: E[]): ClaimsMutator$AudienceCollection<P>;
    add(arg0: string): ClaimsMutator$AudienceCollection<P>;
    and(): P;
    clear(): ClaimsMutator$AudienceCollection<P>;
    remove(arg0: string): ClaimsMutator$AudienceCollection<P>;
    single(arg0: string): P;
}