import type { LookupProvider } from '../../../../dev/lukebemish/opensesame/runtime/LookupProvider.d.ts'
import type { Exception } from '../../../../java/lang/Exception.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OpeningMetafactory$LookupProviderResults extends Record {
    private constructor(provider: LookupProvider, exception: Exception)
    // private exception: Exception;
    // private provider: LookupProvider;
    equals(arg0: Object | null): boolean;
    exception(): Exception;
    hashCode(): number;
    provider(): LookupProvider;
    toString(): string;
}