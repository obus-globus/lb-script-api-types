import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { Property } from '../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
import type { StrLookup } from '../../../../../../org/apache/logging/log4j/core/lookup/StrLookup.d.ts'
export class PropertiesPlugin extends Object {
    static configureSubstitutor(paramproperties: Property[], paramconfig: Configuration): StrLookup;
    private constructor()
}