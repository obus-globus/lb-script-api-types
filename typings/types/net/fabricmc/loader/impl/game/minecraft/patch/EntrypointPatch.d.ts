import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { ListIterator } from '../../../../../../../java/util/ListIterator.d.ts'
import type { EnvType } from '../../../../../../../net/fabricmc/api/EnvType.d.ts'
import type { Version } from '../../../../../../../net/fabricmc/loader/api/Version.d.ts'
import type { MinecraftGameProvider } from '../../../../../../../net/fabricmc/loader/impl/game/minecraft/MinecraftGameProvider.d.ts'
import type { GamePatch } from '../../../../../../../net/fabricmc/loader/impl/game/patch/GamePatch.d.ts'
import type { FabricLauncher } from '../../../../../../../net/fabricmc/loader/impl/launch/FabricLauncher.d.ts'
import type { AbstractInsnNode } from '../../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { ClassNode } from '../../../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
export class EntrypointPatch extends GamePatch {
    constructor(arg0: MinecraftGameProvider)
    // private gameProvider: MinecraftGameProvider;
    // private finishEntrypoint(arg0: EnvType, arg1: ListIterator<AbstractInsnNode>): void;
    // private getGameVersion(): Version;
    // private hasStrInMethod(arg0: string, arg1: string, arg2: string, arg3: string, arg4: (param0: string) => ClassNode): boolean;
    // private hasSuperClass(arg0: string, arg1: string, arg2: (param0: string) => ClassNode): boolean;
    process(arg0: FabricLauncher, arg1: (param0: string) => ClassNode, arg2: (param0: ClassNode) => void): void;
}