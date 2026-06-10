import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder$Reference } from '../../../../net/minecraft/core/Holder$Reference.d.ts'
import type { OutgoingRpcMethod } from '../../../../net/minecraft/server/jsonrpc/OutgoingRpcMethod.d.ts'
import type { PlayerDto } from '../../../../net/minecraft/server/jsonrpc/api/PlayerDto.d.ts'
import type { BanlistService$UserBanDto } from '../../../../net/minecraft/server/jsonrpc/methods/BanlistService$UserBanDto.d.ts'
import type { GameRulesService$GameRuleUpdate } from '../../../../net/minecraft/server/jsonrpc/methods/GameRulesService$GameRuleUpdate.d.ts'
import type { IpBanlistService$IpBanDto } from '../../../../net/minecraft/server/jsonrpc/methods/IpBanlistService$IpBanDto.d.ts'
import type { OperatorService$OperatorDto } from '../../../../net/minecraft/server/jsonrpc/methods/OperatorService$OperatorDto.d.ts'
import type { ServerStateService$ServerState } from '../../../../net/minecraft/server/jsonrpc/methods/ServerStateService$ServerState.d.ts'
export class OutgoingRpcMethods extends Object {
    static GAMERULE_CHANGED: Holder$Reference<OutgoingRpcMethod<GameRulesService$GameRuleUpdate<Object>, void>>;
    static IP_BANNED: Holder$Reference<OutgoingRpcMethod<IpBanlistService$IpBanDto, void>>;
    static IP_UNBANNED: Holder$Reference<OutgoingRpcMethod<string, void>>;
    static PLAYER_ADDED_TO_ALLOWLIST: Holder$Reference<OutgoingRpcMethod<PlayerDto, void>>;
    static PLAYER_BANNED: Holder$Reference<OutgoingRpcMethod<BanlistService$UserBanDto, void>>;
    static PLAYER_DEOPED: Holder$Reference<OutgoingRpcMethod<OperatorService$OperatorDto, void>>;
    static PLAYER_JOINED: Holder$Reference<OutgoingRpcMethod<PlayerDto, void>>;
    static PLAYER_LEFT: Holder$Reference<OutgoingRpcMethod<PlayerDto, void>>;
    static PLAYER_OPED: Holder$Reference<OutgoingRpcMethod<OperatorService$OperatorDto, void>>;
    static PLAYER_REMOVED_FROM_ALLOWLIST: Holder$Reference<OutgoingRpcMethod<PlayerDto, void>>;
    static PLAYER_UNBANNED: Holder$Reference<OutgoingRpcMethod<PlayerDto, void>>;
    static SERVER_ACTIVITY_OCCURRED: Holder$Reference<OutgoingRpcMethod<void, void>>;
    static SERVER_SAVE_COMPLETED: Holder$Reference<OutgoingRpcMethod<void, void>>;
    static SERVER_SAVE_STARTED: Holder$Reference<OutgoingRpcMethod<void, void>>;
    static SERVER_SHUTTING_DOWN: Holder$Reference<OutgoingRpcMethod<void, void>>;
    static SERVER_STARTED: Holder$Reference<OutgoingRpcMethod<void, void>>;
    static STATUS_HEARTBEAT: Holder$Reference<OutgoingRpcMethod<ServerStateService$ServerState, void>>;
    constructor()
}