import type { Parameters } from '../../../../io/ktor/http/Parameters.d.ts'
import type { MultiPartData } from '../../../../io/ktor/http/content/MultiPartData.d.ts'
import type { ApplicationCall } from '../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { DoubleReceivePreventionToken } from '../../../../io/ktor/server/request/DoubleReceivePreventionToken.d.ts'
import type { AttributeKey } from '../../../../io/ktor/util/AttributeKey.d.ts'
import type { TypeInfo } from '../../../../io/ktor/util/reflect/TypeInfo.d.ts'
import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../kotlin/reflect/KClass.d.ts'
export class ApplicationReceiveFunctionsKt extends Object {
    static getDoubleReceivePreventionTokenKey(): AttributeKey<DoubleReceivePreventionToken>;
    static getFormFieldLimit(paramarg0: ApplicationCall): number;
    static receive<T extends unknown>(self: ApplicationCall, typeInfo: TypeInfo): T;
    static receive<T extends unknown>(self: ApplicationCall): T;
    static receive<T extends unknown>(self: ApplicationCall, type: KClass<T>): T;
    static receiveChannel(self: ApplicationCall): ByteReadChannel;
    static receiveMultipart(self: ApplicationCall, formFieldLimit: number): MultiPartData;
    static receiveNullable<T extends unknown>(self: ApplicationCall): T | null;
    static receiveOrNull<T extends unknown>(self: ApplicationCall, typeInfo: TypeInfo): T | null;
    static receiveOrNull<T extends unknown>(self: ApplicationCall): T | null;
    static receiveOrNull<T extends unknown>(self: ApplicationCall, type: KClass<T>): T | null;
    static receiveParameters(self: ApplicationCall): Parameters;
    static receiveText(self: ApplicationCall): string;
    static setFormFieldLimit(paramarg0: ApplicationCall, paramarg1: number): void;
}