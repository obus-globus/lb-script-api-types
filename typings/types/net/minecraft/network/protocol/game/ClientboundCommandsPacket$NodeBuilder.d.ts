import type { ArgumentType } from '../../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { ArgumentBuilder } from '../../../../../com/mojang/brigadier/builder/ArgumentBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export interface ClientboundCommandsPacket$NodeBuilder<S extends Object | number | string | boolean> extends Object{
    configure(input: ArgumentBuilder<S, Object>, executable: boolean, restricted: boolean): ArgumentBuilder<S, Object>;
    createArgument(id: string, argumentType: ArgumentType<Object>, suggestionId: Identifier): ArgumentBuilder<S, Object>;
    createLiteral(id: string): ArgumentBuilder<S, Object>;
}