import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
export class AngleArgument$SingleAngle extends Object {
    private constructor(angle: number, isRelative: boolean)
    // private angle: number;
    // private isRelative: boolean;
    getAngle(sender: CommandSourceStack): number;
}