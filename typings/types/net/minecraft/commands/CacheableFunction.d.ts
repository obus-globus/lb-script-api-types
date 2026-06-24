import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { CommandFunction } from '../../../net/minecraft/commands/functions/CommandFunction.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
import type { ServerFunctionManager } from '../../../net/minecraft/server/ServerFunctionManager.d.ts'
export class CacheableFunction extends Object {
    static CODEC: Codec<CacheableFunction>;
    constructor(id: Identifier)
    // private function: Optional<CommandFunction<CommandSourceStack>>;
    readonly id: Identifier;
    // private resolved: boolean;
    equals(obj: Object | null): boolean;
    get(manager: ServerFunctionManager): Optional<CommandFunction<CommandSourceStack>>;
    getId(): Identifier;
    hashCode(): number;
}