import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { URI } from '../../../../../../../../java/net/URI.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export interface ResolverUtil$Test extends Object{
    doesMatchClass(): boolean;
    doesMatchResource(): boolean;
    matches(type: Class<Object>): boolean;
    matches(resource: URI): boolean;
}