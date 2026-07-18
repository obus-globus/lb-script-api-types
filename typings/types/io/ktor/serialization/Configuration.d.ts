import type { ContentType } from '../../../io/ktor/http/ContentType.d.ts'
import type { ContentConverter } from '../../../io/ktor/serialization/ContentConverter.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Configuration extends Object {
    register<T extends ContentConverter>(contentType: ContentType, converter: T, configuration: (param0: T) => void): void;
}