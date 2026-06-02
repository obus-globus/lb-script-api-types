import type { LookupProvider } from '../../../../dev/lukebemish/opensesame/runtime/LookupProvider.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { MethodHandles$Lookup } from '../../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LookupProviderUnsafe extends Object implements LookupProvider {
    constructor()
    // private lookup: MethodHandles$Lookup;
    // private getImplLookup(): MethodHandles$Lookup;
    openingLookup(arg0: MethodHandles$Lookup, arg1: Class<Object>): MethodHandles$Lookup;
}