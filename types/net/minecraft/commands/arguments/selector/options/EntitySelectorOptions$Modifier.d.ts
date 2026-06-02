import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EntitySelectorParser } from '../../../../../../net/minecraft/commands/arguments/selector/EntitySelectorParser.d.ts'
export interface EntitySelectorOptions$Modifier extends Object{
    handle(parser: EntitySelectorParser): void;
}