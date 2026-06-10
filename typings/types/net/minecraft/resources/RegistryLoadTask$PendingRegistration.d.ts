import type { JsonElement } from '../../../com/google/gson/JsonElement.d.ts'
import type { Either } from '../../../com/mojang/datafixers/util/Either.d.ts'
import type { Decoder } from '../../../com/mojang/serialization/Decoder.d.ts'
import type { Exception } from '../../../java/lang/Exception.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { RegistrationInfo } from '../../../net/minecraft/core/RegistrationInfo.d.ts'
import type { Tag } from '../../../net/minecraft/nbt/Tag.d.ts'
import type { FileToIdConverter } from '../../../net/minecraft/resources/FileToIdConverter.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
import type { RegistryOps } from '../../../net/minecraft/resources/RegistryOps.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Resource } from '../../../net/minecraft/server/packs/resources/Resource.d.ts'
import type { ResourceProvider } from '../../../net/minecraft/server/packs/resources/ResourceProvider.d.ts'
export class RegistryLoadTask$PendingRegistration<T extends Object | number | string | boolean> extends Record {
    static findAndLoadFromResource(paramelementDecoder: Decoder<Object>, paramops: RegistryOps<JsonElement>, paramelementKey: ResourceKey<Object>, paramconverter: FileToIdConverter, paramresourceProvider: (param0: Identifier) => Optional<Resource>): Either<Object, Exception>;
    static loadFromNetwork(paramelementDecoder: Decoder<Object>, paramops: RegistryOps<Tag>, paramelementKey: ResourceKey<Object>, paramcontents: Tag): Either<Object, Exception>;
    static loadFromResource(paramelementDecoder: Decoder<Object>, paramops: RegistryOps<JsonElement>, paramelementKey: ResourceKey<Object>, paramthunk: Resource): Either<Object, Exception>;
    constructor(key: ResourceKey<T>, value: Either<T, Exception>, registrationInfo: RegistrationInfo)
    // private key: ResourceKey<T>;
    // private registrationInfo: RegistrationInfo;
    // private value: Either<T, Exception>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    key(): ResourceKey<T>;
    registrationInfo(): RegistrationInfo;
    toString(): string;
    value(): Either<T, Exception>;
}