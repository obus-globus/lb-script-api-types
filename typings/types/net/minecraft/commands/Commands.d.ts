import type { CommandDispatcher } from '../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { ParseResults } from '../../../com/mojang/brigadier/ParseResults.d.ts'
import type { StringReader } from '../../../com/mojang/brigadier/StringReader.d.ts'
import type { ArgumentType } from '../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { LiteralArgumentBuilder } from '../../../com/mojang/brigadier/builder/LiteralArgumentBuilder.d.ts'
import type { RequiredArgumentBuilder } from '../../../com/mojang/brigadier/builder/RequiredArgumentBuilder.d.ts'
import type { CommandSyntaxException } from '../../../com/mojang/brigadier/exceptions/CommandSyntaxException.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../java/util/function/Predicate.d.ts'
import type { UnaryOperator } from '../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CommandBuildContext } from '../../../net/minecraft/commands/CommandBuildContext.d.ts'
import type { CommandSourceStack } from '../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { Commands$CommandSelection } from '../../../net/minecraft/commands/Commands$CommandSelection.d.ts'
import type { Commands$ParseFunction } from '../../../net/minecraft/commands/Commands$ParseFunction.d.ts'
import type { ExecutionContext } from '../../../net/minecraft/commands/execution/ExecutionContext.d.ts'
import type { HolderLookup$Provider } from '../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { ServerPlayer } from '../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { PermissionCheck } from '../../../net/minecraft/server/permissions/PermissionCheck.d.ts'
import type { PermissionProviderCheck } from '../../../net/minecraft/server/permissions/PermissionProviderCheck.d.ts'
import type { PermissionSet } from '../../../net/minecraft/server/permissions/PermissionSet.d.ts'
import type { PermissionSetSupplier } from '../../../net/minecraft/server/permissions/PermissionSetSupplier.d.ts'
export class Commands extends Object {
    static COMMAND_PREFIX: string;
    static LEVEL_ADMINS: PermissionCheck;
    static LEVEL_ALL: PermissionCheck;
    static LEVEL_GAMEMASTERS: PermissionCheck;
    static LEVEL_MODERATORS: PermissionCheck;
    static LEVEL_OWNERS: PermissionCheck;
    static argument(paramname: string, paramtype: ArgumentType<Object>): RequiredArgumentBuilder<CommandSourceStack, Object>;
    static createCompilationContext(paramcompilationPermissions: PermissionSet): CommandSourceStack;
    static createValidationContext(paramregistries: HolderLookup$Provider): CommandBuildContext;
    static createValidator(paramparser: (param0: StringReader) => void): (param0: string) => boolean;
    static executeCommandInContext(paramcontext: CommandSourceStack, paramconfig: (param0: ExecutionContext<CommandSourceStack>) => void): void;
    static getParseException(paramparse: ParseResults<Object>): CommandSyntaxException;
    static hasPermission(parampermission: PermissionCheck): PermissionProviderCheck<PermissionSetSupplier>;
    static literal(paramliteral: string): LiteralArgumentBuilder<CommandSourceStack>;
    static mapSource(paramparse: ParseResults<Object>, paramsourceOperator: (param0: Object | null) => Object | null): ParseResults<Object>;
    static trimOptionalPrefix(paramcommand: string): string;
    static validate(): void;
    static validateParseResults(paramcommand: ParseResults<Object>): void;
    constructor(commandSelection: Commands$CommandSelection, context: CommandBuildContext)
    readonly dispatcher: CommandDispatcher<CommandSourceStack>;
    getDispatcher(): CommandDispatcher<CommandSourceStack>;
    performCommand(command: ParseResults<CommandSourceStack>, commandString: string): void;
    performPrefixedCommand(sender: CommandSourceStack, command: string): void;
    sendCommands(player: ServerPlayer): void;
}