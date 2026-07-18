import type { JsonWriter } from '../../../../../../../../com/google/gson/stream/JsonWriter.d.ts'
import type { NativeImage } from '../../../../../../../../com/mojang/blaze3d/platform/NativeImage.d.ts'
import type { ContentType } from '../../../../../../../../io/ktor/http/ContentType.d.ts'
import type { HttpStatusCode } from '../../../../../../../../io/ktor/http/HttpStatusCode.d.ts'
import type { ApplicationCall } from '../../../../../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { BufferedImage } from '../../../../../../../../java/awt/image/BufferedImage.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Resource } from '../../../../../../../../net/minecraft/server/packs/resources/Resource.d.ts'
export class HttpHelperKt extends Object {
    static respondImage(self: ApplicationCall, image: NativeImage, contentType: ContentType | null, status: HttpStatusCode | null): void;
    static respondImage(self: ApplicationCall, image: BufferedImage, contentType: ContentType | null, status: HttpStatusCode | null): void;
    static respondJsonWriter(self: ApplicationCall, contentType: ContentType | null, status: HttpStatusCode | null, block: (param0: JsonWriter) => void): void;
    static respondResource(self: ApplicationCall, resource: Resource, contentType: ContentType | null, status: HttpStatusCode | null): void;
}