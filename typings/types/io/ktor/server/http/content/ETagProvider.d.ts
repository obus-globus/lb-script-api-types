import type { EntityTagVersion } from '../../../../../io/ktor/http/content/EntityTagVersion.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ETagProvider extends Object{
    provide(resource: Object): EntityTagVersion | null;
}