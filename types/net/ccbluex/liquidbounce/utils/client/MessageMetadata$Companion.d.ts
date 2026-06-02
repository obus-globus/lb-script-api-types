import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { ClientModule } from '../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { MessageMetadata } from '../../../../../net/ccbluex/liquidbounce/utils/client/MessageMetadata.d.ts'
export class MessageMetadata$Companion extends Object {
    byCommand(command: Command): MessageMetadata;
    byModule(module: ClientModule): MessageMetadata;
}