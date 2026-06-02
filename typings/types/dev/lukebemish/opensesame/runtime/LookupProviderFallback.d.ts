import type { LookupProvider } from '../../../../dev/lukebemish/opensesame/runtime/LookupProvider.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { MethodHandles$Lookup } from '../../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LookupProviderFallback extends Object implements LookupProvider {
    constructor()
    openingLookup(arg0: MethodHandles$Lookup, arg1: Class<Object>): MethodHandles$Lookup;
}