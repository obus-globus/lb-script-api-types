import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MessageBox$IconType } from '../../../../../../net/caffeinemc/mods/sodium/client/platform/MessageBox$IconType.d.ts'
import type { MessageBox$MessageBoxImpl } from '../../../../../../net/caffeinemc/mods/sodium/client/platform/MessageBox$MessageBoxImpl.d.ts'
import type { NativeWindowHandle } from '../../../../../../net/caffeinemc/mods/sodium/client/platform/NativeWindowHandle.d.ts'
export class MessageBox$WindowsMessageBoxImpl extends Object implements MessageBox$MessageBoxImpl {
    static chooseImpl(): MessageBox$MessageBoxImpl;
    private constructor()
    showMessageBox(arg0: NativeWindowHandle, arg1: MessageBox$IconType, arg2: string, arg3: string, arg4: string): void;
}