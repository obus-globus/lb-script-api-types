import type { RedirectModifier } from '../../../../com/mojang/brigadier/RedirectModifier.d.ts'
import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CustomModifierExecutor } from '../../../../net/minecraft/commands/execution/CustomModifierExecutor.d.ts'
export interface CustomModifierExecutor$ModifierAdapter<T extends Object | number | string | boolean> extends RedirectModifier<T>, Object, CustomModifierExecutor<T>{
    apply(context: CommandContext<T>): E[];
}