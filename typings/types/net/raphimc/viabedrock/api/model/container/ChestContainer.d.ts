import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { BlockPosition } from '../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { TextComponent } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent.d.ts'
import type { Container } from '../../../../../../net/raphimc/viabedrock/api/model/container/Container.d.ts'
export class ChestContainer extends Container {
    constructor(arg0: UserConnection, arg1: number, arg2: TextComponent, arg3: BlockPosition, arg4: number)
}