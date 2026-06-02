import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LSPCommand } from '../../../../../org/graalvm/tools/api/lsp/LSPCommand.d.ts'
export interface LSPExtension extends Object{
    getCommands(): LSPCommand[];
}