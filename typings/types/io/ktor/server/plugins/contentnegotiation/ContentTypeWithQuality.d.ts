import type { ContentType } from '../../../../../io/ktor/http/ContentType.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ContentTypeWithQuality extends Object {
    constructor(contentType: ContentType, quality: number)
    readonly contentType: ContentType;
    readonly quality: number;
    component1(): ContentType;
    component2(): number;
    copy(contentType: ContentType, quality: number): ContentTypeWithQuality;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}