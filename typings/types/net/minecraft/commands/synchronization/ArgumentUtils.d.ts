import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { CommandDispatcher } from '../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { ArgumentType } from '../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { CommandNode } from '../../../../com/mojang/brigadier/tree/CommandNode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ArgumentUtils extends Object {
    static createNumberFlags(paramhasMin: boolean, paramhasMax: boolean): number;
    static findUsedArgumentTypes(paramnode: CommandNode<Object>): ArgumentType<Object>[];
    static numberHasMax(paramflags: number): boolean;
    static numberHasMin(paramflags: number): boolean;
    static serializeNodeToJson(paramdispatcher: CommandDispatcher<Object>, paramnode: CommandNode<Object>): JsonObject;
    constructor()
}