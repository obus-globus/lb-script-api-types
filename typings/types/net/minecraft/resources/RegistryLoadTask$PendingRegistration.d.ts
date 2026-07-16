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
export class RegistryLoadTask$PendingRegistration<T extends unknown> extends Record {
    static findAndLoadFromResource<T extends unknown>(paramelementDecoder: Decoder<T>, paramops: RegistryOps<JsonElement>, paramelementKey: ResourceKey<T>, paramconverter: FileToIdConverter, paramresourceProvider: (param0: Identifier) => Optional<Resource>): Either<T, Exception>;
    static loadFromNetwork<T extends unknown>(paramelementDecoder: Decoder<T>, paramops: RegistryOps<Tag>, paramelementKey: ResourceKey<T>, paramcontents: Tag): Either<T, Exception>;
    static loadFromResource<T extends unknown>(paramelementDecoder: Decoder<T>, paramops: RegistryOps<JsonElement>, paramelementKey: ResourceKey<T>, paramthunk: Resource): Either<T, Exception>;
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