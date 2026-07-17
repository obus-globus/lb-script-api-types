import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Semver } from '../../../../../com/vdurmont/semver4j/Semver.d.ts'
import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { StoredObject } from '../../../../../com/viaversion/viaversion/api/connection/StoredObject.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { IntIntPair } from '../../../../../com/viaversion/viaversion/libs/fastutil/ints/IntIntPair.d.ts'
import type { TextComponent } from '../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { ChatRestrictionLevel } from '../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/ChatRestrictionLevel.d.ts'
import type { GameType } from '../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/GameType.d.ts'
export class GameSessionStorage extends StoredObject {
    constructor(arg0: UserConnection)
    readonly availableEntityIdentifiers: string[];
    readonly bedrockBiomeDefinitions: Map$Entry<string, Tag>[];
    readonly bedrockDimensionDefinitions: JavaMap<string, IntIntPair>;
    readonly bedrockVanillaVersion: Semver;
    readonly blockBreakingServerAuthoritative: boolean;
    readonly chatRestrictionLevel: ChatRestrictionLevel;
    readonly commandsEnabled: boolean;
    readonly deathMessage: TextComponent;
    readonly flatGenerator: boolean;
    readonly hardcoreMode: boolean;
    readonly immutableWorld: boolean;
    readonly inventoryServerAuthoritative: boolean;
    readonly javaRegistries: Map$Entry<string, Tag>[];
    readonly levelGameType: GameType;
    readonly levelTime: number;
    readonly movementRewindHistorySize: number;
    addEntityIdentifier(arg0: string): void;
    areCommandsEnabled(): boolean;
    getAvailableEntityIdentifiers(): string[];
    getBedrockBiomeDefinitions(): Map$Entry<string, Tag>[];
    getBedrockDimensionDefinitions(): JavaMap<string, IntIntPair>;
    getBedrockVanillaVersion(): Semver;
    getChatRestrictionLevel(): ChatRestrictionLevel;
    getDeathMessage(): TextComponent;
    getJavaRegistries(): Map$Entry<string, Tag>[];
    getLevelGameType(): GameType;
    getLevelTime(): number;
    getMovementRewindHistorySize(): number;
    isBlockBreakingServerAuthoritative(): boolean;
    isFlatGenerator(): boolean;
    isHardcoreMode(): boolean;
    isImmutableWorld(): boolean;
    isInventoryServerAuthoritative(): boolean;
    putBedrockDimensionDefinition(arg0: string, arg1: IntIntPair): void;
    setBedrockBiomeDefinitions(arg0: Map$Entry<string, Tag>[]): void;
    setBedrockVanillaVersion(arg0: Semver): void;
    setBlockBreakingServerAuthoritative(arg0: boolean): void;
    setChatRestrictionLevel(arg0: ChatRestrictionLevel): void;
    setCommandsEnabled(arg0: boolean): void;
    setDeathMessage(arg0: TextComponent): void;
    setFlatGenerator(arg0: boolean): void;
    setHardcoreMode(arg0: boolean): void;
    setImmutableWorld(arg0: boolean): void;
    setInventoryServerAuthoritative(arg0: boolean): void;
    setLevelGameType(arg0: GameType): void;
    setLevelTime(arg0: number): void;
    setMovementRewindHistorySize(arg0: number): void;
}