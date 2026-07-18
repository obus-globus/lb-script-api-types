import type { EntityTagVersion } from '../../../../io/ktor/http/content/EntityTagVersion.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EntityTagVersion$Companion extends Object {
    readonly STAR: EntityTagVersion;
    parse(headerValue: string): EntityTagVersion[];
    parseSingle(value: string): EntityTagVersion;
}