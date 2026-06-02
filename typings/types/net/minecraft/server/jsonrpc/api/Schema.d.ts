import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { URI } from '../../../../../java/net/URI.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PlayerDto } from '../../../../../net/minecraft/server/jsonrpc/api/PlayerDto.d.ts'
import type { SchemaComponent } from '../../../../../net/minecraft/server/jsonrpc/api/SchemaComponent.d.ts'
import type { BanlistService$UserBanDto } from '../../../../../net/minecraft/server/jsonrpc/methods/BanlistService$UserBanDto.d.ts'
import type { DiscoveryService$DiscoverInfo } from '../../../../../net/minecraft/server/jsonrpc/methods/DiscoveryService$DiscoverInfo.d.ts'
import type { DiscoveryService$DiscoverResponse } from '../../../../../net/minecraft/server/jsonrpc/methods/DiscoveryService$DiscoverResponse.d.ts'
import type { IpBanlistService$IncomingIpBanDto } from '../../../../../net/minecraft/server/jsonrpc/methods/IpBanlistService$IncomingIpBanDto.d.ts'
import type { IpBanlistService$IpBanDto } from '../../../../../net/minecraft/server/jsonrpc/methods/IpBanlistService$IpBanDto.d.ts'
import type { Message } from '../../../../../net/minecraft/server/jsonrpc/methods/Message.d.ts'
import type { OperatorService$OperatorDto } from '../../../../../net/minecraft/server/jsonrpc/methods/OperatorService$OperatorDto.d.ts'
import type { PlayerService$KickDto } from '../../../../../net/minecraft/server/jsonrpc/methods/PlayerService$KickDto.d.ts'
import type { ServerStateService$ServerState } from '../../../../../net/minecraft/server/jsonrpc/methods/ServerStateService$ServerState.d.ts'
import type { ServerStateService$SystemMessage } from '../../../../../net/minecraft/server/jsonrpc/methods/ServerStateService$SystemMessage.d.ts'
import type { PermissionLevel } from '../../../../../net/minecraft/server/permissions/PermissionLevel.d.ts'
import type { Difficulty } from '../../../../../net/minecraft/world/Difficulty.d.ts'
import type { GameType } from '../../../../../net/minecraft/world/level/GameType.d.ts'
import type { GameRuleType } from '../../../../../net/minecraft/world/level/gamerules/GameRuleType.d.ts'
export class Schema<T extends Object | number | string | boolean> extends Record {
    static BOOL_OR_INT_SCHEMA: Schema<Object>;
    static BOOL_SCHEMA: Schema<boolean>;
    static CODEC: Codec<Object>;
    static DIFFICULTY_SCHEMA: SchemaComponent<Difficulty>;
    static DISCOVERY_SCHEMA: Schema<DiscoveryService$DiscoverResponse>;
    static GAME_TYPE_SCHEMA: SchemaComponent<GameType>;
    static INCOMING_IP_BAN_SCHEMA: SchemaComponent<IpBanlistService$IncomingIpBanDto>;
    static INT_SCHEMA: Schema<number>;
    static IP_BAN_SCHEMA: SchemaComponent<IpBanlistService$IpBanDto>;
    static KICK_PLAYER_SCHEMA: SchemaComponent<PlayerService$KickDto>;
    static MESSAGE_SCHEMA: SchemaComponent<Message>;
    static NUMBER_SCHEMA: Schema<number>;
    static OPERATOR_SCHEMA: SchemaComponent<OperatorService$OperatorDto>;
    static PERMISSION_LEVEL_SCHEMA: Schema<PermissionLevel>;
    static PLAYER_BAN_SCHEMA: SchemaComponent<BanlistService$UserBanDto>;
    static PLAYER_SCHEMA: SchemaComponent<PlayerDto>;
    static RULE_TYPE_SCHEMA: Schema<GameRuleType>;
    static SERVER_STATE_SCHEMA: SchemaComponent<ServerStateService$ServerState>;
    static STRING_SCHEMA: Schema<string>;
    static SYSTEM_MESSAGE_SCHEMA: SchemaComponent<ServerStateService$SystemMessage>;
    static TYPED_GAME_RULE_SCHEMA: SchemaComponent<Object>;
    static UNTYPED_GAME_RULE_SCHEMA: SchemaComponent<Object>;
    static UUID_SCHEMA: Schema<UUID>;
    static VERSION_SCHEMA: SchemaComponent<DiscoveryService$DiscoverInfo>;
    static arrayOf(paramitem: Schema<Object>, paramcodec: Codec<Object>): Schema<Object>;
    static getSchemaRegistry(): (Object | null)[];
    static ofEnum(paramvalues: () => Object | null): Schema<Object>;
    static ofEnum(paramvalues: () => Object | null, paramcodec: Codec<Object>): Schema<Object>;
    static ofEnum(paramenumValues: string[], paramcodec: Codec<Object>): Schema<Object>;
    static ofRef(paramref: URI, paramcodec: Codec<Object>): Schema<Object>;
    static ofType(paramtype: string, paramcodec: Codec<Object>): Schema<Object>;
    static ofTypes(paramtypes: string[], paramcodec: Codec<Object>): Schema<Object>;
    static record(paramcodec: Codec<Object>): Schema<Object>;
    static typedCodec(): Codec<Object>;
    constructor(reference: Optional<URI>, type: string[], items: Optional<Schema<Object>>, properties: { [key: string]: Schema<Object> }, enumValues: string[], codec: Codec<T>)
    // private codec: Codec<T>;
    // private enumValues: string[];
    // private items: Optional<Schema<Object>>;
    // private properties: { [key: string]: Schema<Object> };
    // private reference: Optional<URI>;
    // private type: string[];
    asArray(): Schema<T[]>;
    codec(): Codec<T>;
    enumValues(): string[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    info(): Schema<T>;
    items(): Optional<Schema<Object>>;
    properties(): { [key: string]: Schema<Object> };
    reference(): Optional<URI>;
    toString(): string;
    type(): string[];
    withField(name: string, field: Schema<Object>): Schema<T>;
}