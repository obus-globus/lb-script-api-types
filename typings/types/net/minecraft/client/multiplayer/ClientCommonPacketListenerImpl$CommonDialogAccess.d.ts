import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Screen } from '../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { DialogConnectionAccess } from '../../../../net/minecraft/client/gui/screens/dialog/DialogConnectionAccess.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { Tag } from '../../../../net/minecraft/nbt/Tag.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ServerLinks } from '../../../../net/minecraft/server/ServerLinks.d.ts'
import type { Dialog } from '../../../../net/minecraft/server/dialog/Dialog.d.ts'
export abstract class ClientCommonPacketListenerImpl$CommonDialogAccess extends Object implements DialogConnectionAccess {
    constructor(null_: ClientCommonPacketListenerImpl$CommonDialogAccess)
    disconnect(message: Component): void;
    openDialog(dialog: Holder<Dialog>, activeScreen: Screen): void;
    runCommand(command: string, activeScreen: Screen): void;
    sendCustomAction(id: Identifier, payload: Optional<Tag>): void;
    serverLinks(): ServerLinks;
}