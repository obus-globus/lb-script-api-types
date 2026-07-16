import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { BlockPosition } from '../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { BlockEntity } from '../../../../../com/viaversion/viaversion/api/minecraft/blockentity/BlockEntity.d.ts'
import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Container } from '../../../../../net/raphimc/viabedrock/api/model/container/Container.d.ts'
import type { Entity } from '../../../../../net/raphimc/viabedrock/api/model/entity/Entity.d.ts'
import type { BedrockMappingData$JavaParticle } from '../../../../../net/raphimc/viabedrock/protocol/data/BedrockMappingData$JavaParticle.d.ts'
import type { ContainerType } from '../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/ContainerType.d.ts'
import type { ServerboundLoadingScreenPacketType } from '../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/ServerboundLoadingScreenPacketType.d.ts'
import type { EntityEvent } from '../../../../../net/raphimc/viabedrock/protocol/data/enums/java/EntityEvent.d.ts'
import type { GameEventType } from '../../../../../net/raphimc/viabedrock/protocol/data/enums/java/GameEventType.d.ts'
import type { CustomChatCompletionsAction } from '../../../../../net/raphimc/viabedrock/protocol/data/enums/java/generated/CustomChatCompletionsAction.d.ts'
import type { Position3f } from '../../../../../net/raphimc/viabedrock/protocol/model/Position3f.d.ts'
export class PacketFactory extends Object {
    static sendBedrockContainerClose(paramarg0: UserConnection, paramarg1: number, paramarg2: ContainerType): void;
    static sendBedrockLoadingScreen(paramarg0: UserConnection, paramarg1: ServerboundLoadingScreenPacketType, paramarg2: number): void;
    static sendJavaBlockChangedAck(paramarg0: UserConnection, paramarg1: number): void;
    static sendJavaBlockEntityData(paramarg0: UserConnection, paramarg1: BlockPosition, paramarg2: BlockEntity): void;
    static sendJavaBlockUpdate(paramarg0: UserConnection, paramarg1: BlockPosition, paramarg2: number): void;
    static sendJavaContainerClose(paramarg0: UserConnection, paramarg1: number): void;
    static sendJavaContainerSetContent(paramarg0: UserConnection, paramarg1: Container): void;
    static sendJavaCustomChatCompletions(paramarg0: UserConnection, paramarg1: CustomChatCompletionsAction, paramarg2: string[]): void;
    static sendJavaEntityEvent(paramarg0: UserConnection, paramarg1: Entity, paramarg2: EntityEvent): void;
    static sendJavaGameEvent(paramarg0: UserConnection, paramarg1: GameEventType, paramarg2: number): void;
    static sendJavaLevelParticles(paramarg0: UserConnection, paramarg1: Position3f, paramarg2: BedrockMappingData$JavaParticle): void;
    static sendJavaRotateHead(paramarg0: UserConnection, paramarg1: Entity): void;
    static sendJavaSystemChat(paramarg0: UserConnection, paramarg1: Tag): void;
    static writeJavaContainerSetContent(paramarg0: PacketWrapper, paramarg1: Container): void;
    static writeJavaDisconnect(paramarg0: PacketWrapper, paramarg1: string): void;
    static writeJavaLevelParticles(paramarg0: PacketWrapper, paramarg1: Position3f, paramarg2: BedrockMappingData$JavaParticle): void;
    constructor()
}