import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GamePatch } from '../../../../../../net/fabricmc/loader/impl/game/patch/GamePatch.d.ts'
import type { FabricLauncher } from '../../../../../../net/fabricmc/loader/impl/launch/FabricLauncher.d.ts'
import type { SimpleClassPath } from '../../../../../../net/fabricmc/loader/impl/util/SimpleClassPath.d.ts'
import type { ClassNode } from '../../../../../../org/objectweb/asm/tree/ClassNode.d.ts'
export class GameTransformer extends Object {
    constructor(...arg0: GamePatch[])
    // private entrypointsLocated: boolean;
    // private patchedClasses: JavaMap<string, number[]>;
    // private patches: GamePatch[];
    // private addPatchedClass(arg0: ClassNode): void;
    locateEntrypoints(arg0: FabricLauncher, arg1: Path[]): void;
    // private readClassNode(arg0: SimpleClassPath, arg1: string): ClassNode;
    transform(arg0: string): number[];
}