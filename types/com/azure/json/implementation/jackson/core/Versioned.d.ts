import type { Version } from '../../../../../../com/azure/json/implementation/jackson/core/Version.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface Versioned extends Object{
    version(): Version;
}