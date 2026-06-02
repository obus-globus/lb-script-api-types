import type { CommandDispatcher } from '../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ReturnCommand extends Object {
    static register(paramdispatcher: CommandDispatcher<Object>): void;
    constructor()
}