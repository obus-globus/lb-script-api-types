import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClientInfo } from '../../../../../net/minecraft/server/jsonrpc/methods/ClientInfo.d.ts'
import type { GameRulesService$GameRuleUpdate } from '../../../../../net/minecraft/server/jsonrpc/methods/GameRulesService$GameRuleUpdate.d.ts'
import type { GameRule } from '../../../../../net/minecraft/world/level/gamerules/GameRule.d.ts'
export interface MinecraftGameRuleService extends Object{
    getAvailableGameRules(): Stream<GameRule<Object>>;
    getRuleValue<T extends Object | number | string | boolean>(gameRule: GameRule<T>): T;
    getTypedRule<T extends Object | number | string | boolean>(gameRule: GameRule<T>, value: T): GameRulesService$GameRuleUpdate<T>;
    updateGameRule(update: GameRulesService$GameRuleUpdate<T>, clientInfo: ClientInfo): GameRulesService$GameRuleUpdate<T>;
}