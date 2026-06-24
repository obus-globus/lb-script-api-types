import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Vec3i } from '../../../../../../net/minecraft/core/Vec3i.d.ts'
import type { GameTestInstance } from '../../../../../../net/minecraft/gametest/framework/GameTestInstance.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Rotation } from '../../../../../../net/minecraft/world/level/block/Rotation.d.ts'
import type { TestInstanceBlockEntity$Status } from '../../../../../../net/minecraft/world/level/block/entity/TestInstanceBlockEntity$Status.d.ts'
export class TestInstanceBlockEntity$Data extends Record {
    static CODEC: Codec<TestInstanceBlockEntity$Data>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, TestInstanceBlockEntity$Data>;
    constructor(test: Optional<ResourceKey<GameTestInstance>>, size: Vec3i, rotation: Rotation, ignoreEntities: boolean, status: TestInstanceBlockEntity$Status, errorMessage: Optional<Component>)
    // private errorMessage: Optional<Component>;
    // private ignoreEntities: boolean;
    // private rotation: Rotation;
    // private size: Vec3i;
    // private status: TestInstanceBlockEntity$Status;
    // private test: Optional<ResourceKey<GameTestInstance>>;
    equals(o: Object | null): boolean;
    errorMessage(): Optional<Component>;
    hashCode(): number;
    ignoreEntities(): boolean;
    rotation(): Rotation;
    size(): Vec3i;
    status(): TestInstanceBlockEntity$Status;
    test(): Optional<ResourceKey<GameTestInstance>>;
    toString(): string;
    withError(error: Component): TestInstanceBlockEntity$Data;
    withSize(size: Vec3i): TestInstanceBlockEntity$Data;
    withStatus(status: TestInstanceBlockEntity$Status): TestInstanceBlockEntity$Data;
}